# Search Index Generator Implementation Prompt

## Background
A search index is crucial for quickly finding relevant components in a large component library. The search index generator needs to create an optimized data structure that enables fast, relevant search across component names, descriptions, props, and examples.

## Task Description
Implement a search index generator that:

1. Creates an optimized search index from component documentation
2. Indexes component names, descriptions, prop names, and examples
3. Supports fuzzy matching and partial matches
4. Weights different fields appropriately for relevance
5. Generates a compact, efficient search index format

## Technical Requirements

- The search index should support fast prefix and substring searches
- Should implement relevance scoring based on field weights
- Must handle fuzzy matching for typo tolerance
- Should optimize index size for quick loading
- Must support incremental updates when components change
- Should be designed for client-side search with minimal runtime overhead

## Search Features to Support

1. Component name search (highest priority)
2. Prop name search
3. Description and documentation text search
4. Tag and category search
5. Example code search (lowest priority)
6. Partial word and prefix matching
7. Fuzzy matching for typo tolerance

## Current Environment

- Extracted component documentation will be in a structured format
- Components have names, descriptions, props, and examples
- Components may be categorized or tagged
- Search needs to work efficiently in the browser

## Expected Implementation

Provide a detailed implementation strategy for the search index generator including:

1. Index structure and data format
2. Tokenization and normalization approach
3. Weighting and scoring algorithm
4. Optimization techniques for index size and search speed
5. Incremental update strategy

Include code examples for:
1. Main index generation function
2. Tokenization and normalization logic
3. Scoring and relevance algorithm
4. Search function implementation

## Implementation Guidance

### Indexing Structure Selection
- Implement an inverted index structure optimized for front-end search performance
- Use a trie-based index for prefix searches combined with n-gram indexing for substring searches
- Create separate indices for different field types (names, descriptions, props) with cross-references
- Apply field-specific compression techniques to minimize index size
- Include metadata with each index entry to support relevance scoring

### Text Processing and Normalization
- Implement word-level tokenization with special handling for camelCase and kebab-case identifiers
- Apply stemming using a lightweight algorithm like Porter stemming
- Use lowercase normalization and accent stripping for language consistency
- Generate n-grams (n=2,3) for substring matching capabilities
- Build a custom stopword list specific to component documentation

### Relevance Scoring Implementation
- Use a TF-IDF based scoring mechanism with field weights
- Apply higher weights to component names (5.0), followed by prop names (3.0), tags (2.0), and descriptions (1.0)
- Implement position-based scoring that prioritizes matches at the beginning of terms
- Add exact match bonuses for perfect matches on component names
- Include recency factors for newly added or updated components

### Incremental Update Strategy
- Store component content fingerprints to detect changes
- Implement a differential update system that only reindexes changed components
- Use a document versioning approach to track changes and enable efficient updates
- Create a delta index that can be merged with the main index
- Implement a background indexing process to avoid blocking the build pipeline

### Client-side Search Algorithm
- Implement a multi-stage search pipeline that prioritizes exact matches before fuzzy matches
- Use a Levenshtein distance algorithm with a configurable threshold for fuzzy matching
- Apply query analysis to determine search intent and adjust strategies accordingly
- Implement query optimization to limit the search space based on prefixes
- Use web workers for search operations to prevent UI blocking