# Virtual Knowledge Library (가상 지식 도서관)

**Virtual Knowledge Library**는 흩어진 웹(HTML 등) 기반의 비정형 문서 데이터를 파싱(Parsing)하고, 이를 '온톨로지(Ontology)' 관점에서 카테고리화하여 시각적으로 탐색할 수 있도록 돕는 구조화된 지식 탐색형 UI/UX 모듈입니다.

본 프로젝트는 단순한 웹 페이지 생성을 넘어, **LLM 기반 RAG(Retrieval-Augmented Generation) 시스템의 성능을 결정짓는 핵심인 데이터 전처리 파이프라인(Data Preprocessing Pipeline)과 시맨틱(Semantic) 데이터 분류 로직을 시각화**한 결과물입니다.

## 🌟 주요 특징

### 1. **온톨로지 기반 지식 분류 (Ontology-based Classification)**
수집된 다양한 학문 및 프레임워크 데이터를 단순 리스트가 아닌 '개념 간의 관계'를 중심으로 재구성했습니다. 각 데이터는 `category`, `discipline`, `coreFramework` 특성을 가지고 분류되며, 논리적이고 체계적인 계층 구조(Hierarchical Structure)를 이룹니다.

### 2. **RAG 파이프라인을 위한 데이터 전처리 시뮬레이션**
웹(Threads 등)에서 파싱한 원시 텍스트 문서를 어떻게 메타데이터(Metadata)와 함께 정제(Cleansing)하여 AI가 쉽게 검색(Retrieval)하고 생성에 활용할 수 있는지(Context), 그 데이터 구조체(JSON 구조 기반)를 명확히 정의하고 있습니다. 이는 추후 Vector DB 인덱싱을 위한 핵심 기반이 됩니다.

### 3. **인터랙티브 책장 UI 시각화 (Interactive Bookshelf UI)**
Vanilla HTML, CSS, JavaScript 만으로 구현된 프론트엔드로, 백엔드 의존성 없이 로컬 환경에서 지식 정보를 동적으로 렌더링하고 시각적으로 미려한(Dynamic Aesthetics) 책장 경험을 제공합니다. DOM을 조작하여 모달(Modal)과 정보 패널 로직을 구현하였습니다.

## 🛠 기술 스택
- **데이터 처리 전략:** Data Parsing, JSON-based Ontology Architecture
- **프론트엔드:** HTML5, CSS3, ES6+ JavaScript (Vanilla)
- **디자인 철학:** Modern Typography, Interactive Micro-animations, Semantic UI

## 📁 주요 파일 설명
* `virtual-knowledge-library.html`: 메인 웹 페이지 레이아웃 (DOM 구조)
* `style.css`: 동적 책장 디자인, 모달 및 패널 UI 스타일링 (CSS Variables 응용)
* `main.js`: KNOWLEDGE_DATA(온톨로지 데이터베이스) 정의 및 동적 렌더링 로직

## 🚀 시작 방법
이 레포지토리는 로컬 환경에서 브라우저를 통해 즉시 실행 가능합니다.
별도의 빌드 과정 없이 `virtual-knowledge-library.html` 파일을 더블 클릭하거나 브라우저에 Drag & Drop 하여 열어보세요!
