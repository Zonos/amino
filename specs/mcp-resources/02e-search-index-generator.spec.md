# Search Index Generator Strategy

## Overview

This document outlines our strategy for generating a search index from component documentation for the MCP documentation system. The search index generator will create efficient data structures to enable fast and relevant searching across component names, descriptions, props, and examples.

## Approach

We will implement a dedicated search index generator that processes the structured documentation data from the TypeScript interface parser, JSDoc comment extractor, and component example extractor. This generator will create optimized search indices that support various query types and relevance-based ranking of results.

## Implementation Strategy

Our implementation will focus on creating efficient search indices using the following approach:

1. **Document Aggregation**: Combine component documentation from multiple extractors into a unified format.

2. **Text Processing**: Apply text normalization, tokenization, and stemming to enhance search quality.

3. **Index Creation**: Generate inverted indices for efficient term-based lookups.

4. **Relevance Scoring**: Implement algorithms for ranking search results based on relevance.

5. **Search Optimization**: Create specialized indices for common search patterns.

6. **Index Serialization**: Serialize indices to JSON for efficient storage and retrieval.

## Core Components

### 1. Document Processor

This module will prepare documentation for indexing:

```typescript
import { ComponentDocumentation } from '../types';
import { SearchDocument } from './types';

export function processDocumentsForIndexing(
  components: ComponentDocumentation[]
): SearchDocument[] {
  return components.map(component => ({
    id: component.name,
    name: component.name,
    description: component.description,
    category: component.category,
    props: Object.entries(component.props).map(([name, prop]) => ({
      name,
      description: prop.description,
      type: prop.type
    })),
    examples: component.examples.map(example => ({
      title: example.name,
      description: example.description,
      code: example.code
    }))
  }));
}
```

### 2. Text Processor

This module will handle text normalization and tokenization:

```typescript
export function processText(text: string): string[] {
  // Convert to lowercase
  const lowercased = text.toLowerCase();
  
  // Remove special characters
  const cleaned = lowercased.replace(/[^\w\s]/g, ' ');
  
  // Split into tokens
  const tokens = cleaned.split(/\s+/).filter(Boolean);
  
  // Apply stemming
  const stemmed = tokens.map(token => stemWord(token));
  
  // Remove duplicates and stopwords
  return [...new Set(stemmed)].filter(token => !isStopword(token));
}

function stemWord(word: string): string {
  // Basic stemming implementation
  // In production, use a library like stemmer or natural
  
  // Remove common suffixes
  if (word.endsWith('ing')) return word.slice(0, -3);
  if (word.endsWith('ed')) return word.slice(0, -2);
  if (word.endsWith('s')) return word.slice(0, -1);
  
  return word;
}

function isStopword(word: string): boolean {
  const stopwords = new Set([
    'a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'with'
  ]);
  
  return stopwords.has(word);
}
```

### 3. Inverted Index Builder

This module will create the inverted index:

```typescript
import { SearchDocument } from './types';

interface InvertedIndex {
  [term: string]: {
    documentIds: string[];
    positions: {
      [documentId: string]: number[];
    };
  };
}

export function buildInvertedIndex(documents: SearchDocument[]): InvertedIndex {
  const index: InvertedIndex = {};
  
  documents.forEach(document => {
    // Process document fields
    const fields = [
      { text: document.name, weight: 10 },
      { text: document.description, weight: 5 },
      ...document.props.map(prop => ({ 
        text: `${prop.name} ${prop.description} ${prop.type}`,
        weight: 3
      })),
      ...document.examples.map(example => ({
        text: `${example.title} ${example.description}`,
        weight: 2
      }))
    ];
    
    // Process each field
    fields.forEach(field => {
      const tokens = processText(field.text);
      
      // Update index for each token
      tokens.forEach((token, position) => {
        if (!index[token]) {
          index[token] = {
            documentIds: [],
            positions: {}
          };
        }
        
        // Add document to token's documents list
        if (!index[token].documentIds.includes(document.id)) {
          index[token].documentIds.push(document.id);
        }
        
        // Record position of token in document
        if (!index[token].positions[document.id]) {
          index[token].positions[document.id] = [];
        }
        index[token].positions[document.id].push(position);
      });
    });
  });
  
  return index;
}
```

### 4. Search Engine

This module will handle search queries using the inverted index:

```typescript
import { SearchDocument } from './types';

export function searchIndex(
  query: string,
  index: InvertedIndex,
  documents: SearchDocument[]
): SearchResult[] {
  // Process the query
  const queryTokens = processText(query);
  
  // Find matching documents
  const matchingDocumentScores = new Map<string, number>();
  
  // Score each query token
  queryTokens.forEach(token => {
    const indexEntry = index[token];
    
    if (indexEntry) {
      indexEntry.documentIds.forEach(docId => {
        // Calculate score for this token in this document
        const score = calculateScore(token, docId, indexEntry, query);
        
        // Update document score
        const currentScore = matchingDocumentScores.get(docId) || 0;
        matchingDocumentScores.set(docId, currentScore + score);
      });
    }
  });
  
  // Sort results by score
  const results = Array.from(matchingDocumentScores.entries())
    .map(([docId, score]) => ({
      document: documents.find(doc => doc.id === docId)!,
      score
    }))
    .sort((a, b) => b.score - a.score);
  
  return results;
}

function calculateScore(
  token: string,
  documentId: string,
  indexEntry: IndexEntry,
  query: string
): number {
  // Calculate TF (term frequency)
  const termFrequency = indexEntry.positions[documentId].length;
  
  // Calculate IDF (inverse document frequency)
  const documentCount = /* total number of documents */;
  const documentFrequency = indexEntry.documentIds.length;
  const inverseDocumentFrequency = Math.log(documentCount / documentFrequency);
  
  // Calculate TF-IDF score
  const tfIdf = termFrequency * inverseDocumentFrequency;
  
  // Adjust score based on position (matches at the beginning are more important)
  const positionBoost = calculatePositionBoost(indexEntry.positions[documentId]);
  
  // Adjust score if the token is an exact match to a component name
  const exactMatchBoost = token === documentId.toLowerCase() ? 5 : 1;
  
  return tfIdf * positionBoost * exactMatchBoost;
}
```

### 5. Index Serializer

This module will serialize the index for storage:

```typescript
import { writeFileSync } from 'fs';
import { InvertedIndex, SearchDocument } from './types';

export function serializeIndices(
  index: InvertedIndex,
  documents: SearchDocument[],
  outputPath: string
): void {
  // Create the serializable index data
  const indexData = {
    version: '1.0.0',
    documents,
    index
  };
  
  // Write to file
  writeFileSync(
    outputPath,
    JSON.stringify(indexData, null, 2),
    'utf8'
  );
}
```

## Specialized Indices

To optimize for common search patterns, we'll create specialized indices:

### Component Name Index

```typescript
function createNameIndex(documents: SearchDocument[]): NameIndex {
  const nameIndex: NameIndex = {};
  
  documents.forEach(doc => {
    // Create mappings for full name
    nameIndex[doc.name.toLowerCase()] = doc.id;
    
    // Create mappings for partial names (prefix search)
    for (let i = 1; i <= doc.name.length; i++) {
      const prefix = doc.name.slice(0, i).toLowerCase();
      if (!nameIndex[prefix]) {
        nameIndex[prefix] = [];
      }
      if (Array.isArray(nameIndex[prefix])) {
        nameIndex[prefix].push(doc.id);
      }
    }
  });
  
  return nameIndex;
}
```

### Category Index

```typescript
function createCategoryIndex(documents: SearchDocument[]): CategoryIndex {
  const categoryIndex: CategoryIndex = {};
  
  documents.forEach(doc => {
    if (!doc.category) return;
    
    if (!categoryIndex[doc.category]) {
      categoryIndex[doc.category] = [];
    }
    
    categoryIndex[doc.category].push(doc.id);
  });
  
  return categoryIndex;
}
```

### Props Index

```typescript
function createPropsIndex(documents: SearchDocument[]): PropsIndex {
  const propsIndex: PropsIndex = {};
  
  documents.forEach(doc => {
    doc.props.forEach(prop => {
      const propKey = prop.name.toLowerCase();
      
      if (!propsIndex[propKey]) {
        propsIndex[propKey] = [];
      }
      
      propsIndex[propKey].push({
        componentId: doc.id,
        propDescription: prop.description
      });
    });
  });
  
  return propsIndex;
}
```

## Integration with Documentation Pipeline

The search index generator will integrate with the broader documentation pipeline as follows:

1. All extractors (TypeScript interface parser, JSDoc comment extractor, component example extractor) complete their work.
2. The search index generator receives the combined documentation.
3. Multiple indices are generated for different search scenarios.
4. The indices are serialized to JSON files as part of the documentation output.
5. The indices are available for client-side search or API-based search.

## Performance Considerations

To ensure optimal performance of the search index generator:

1. **Incremental Updates**: Only rebuild indices for components that have changed.
2. **Selective Indexing**: Include only necessary fields to keep indices compact.
3. **Parallel Processing**: Generate different types of indices in parallel.
4. **Compression**: Apply techniques to reduce index size without compromising search quality.

## Next Steps

1. Implement the document processor in `build-utils/mcp/search/document-processor.ts`
2. Create the text processing module with tokenization and stemming
3. Implement the inverted index builder
4. Develop the search functionality
5. Create the index serialization module
6. Add tests for search performance and relevance

## References

- [Information Retrieval: Inverted Index](https://en.wikipedia.org/wiki/Inverted_index)
- [TF-IDF Scoring](https://en.wikipedia.org/wiki/Tf%E2%80%93idf)
- [Stemming Algorithms](https://en.wikipedia.org/wiki/Stemming)