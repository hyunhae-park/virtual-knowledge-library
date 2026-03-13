const KNOWLEDGE_DATA = [
    {
        category: "정신 및 인지 (MIND & COGNITION)",
        books: [
            {
                id: 1,
                title: "Thinking, Fast and Slow",
                author: "Daniel Kahneman",
                discipline: "인지과학 • 심리학",
                coreFramework: "시스템 1 & 시스템 2 사고",
                keyPrinciples: [
                    {
                        text: "시스템 1은 빠르고 직관적이며 감정적임",
                        summary: "시스템 1은 뇌의 자동적이고 빠른 사고 모드입니다. 최소한의 노력을 사용하며, 우리가 주변 세상을 즉각적으로 판단하고 반응하게 돕습니다. 예를 들어, 익숙한 얼굴을 알아보기나 2+2의 답을 내는 것과 같은 일이 이에 해당합니다. 하지만 시스템 1은 직관적이라 편향과 오류에 취약하며, 종종 복잡한 문제를 단순한 휴리스틱으로 대체하여 결정하는 경향이 있습니다. 생존을 위해 발달했지만 현대 사회의 복잡한 통계적 판단에서는 실수하기 쉽습니다."
                    },
                    {
                        text: "시스템 2는 느리고 계획적이며 논리적임",
                        summary: "시스템 2는 더 많은 노력이 필요한 의식적이고 분석적인 사고 모드입니다. 논리적인 추론, 복잡한 계산, 집중력을 요하는 작업에 개입합니다. 시스템 2는 시스템 1의 직관을 모니터링하고 수정할 수 있는 능력이 있지만, 에너지를 많이 소모하기 때문에 '인지적 게으름'으로 인해 시스템 1에 판단을 맡겨버리는 경우가 많습니다. 비판적 사고의 핵심이며, 대안을 고려하고 사실을 검증하는 과정에서 오류를 바로잡는 역할을 수행합니다."
                    },
                    {
                        text: "인지적 편향이 우리의 판단을 형성함",
                        summary: "인간은 합리적인 존재가 아니라 특정 패턴에 따라 편향되게 생각하는 존재입니다. 가용성 휴리스틱(떠오르기 쉬운 정보를 중요하게 생각함), 닻 내림 효과(첫 번째 접한 수치에 기준을 둠), 매몰 비용 오류(이미 투자한 것을 아깝게 생각하여 잘못된 선택을 계속함) 등이 대표적인 예입니다. 이러한 편향은 시스템 1이 효율성을 위해 선택한 지름길의 부작용이며, 이를 인지하고 시스템 2를 활성화하여 교정하려는 노력이 필요함을 저자는 강조합니다."
                    }
                ],
                color: "#e63946",
                height: 110
            },
            {
                id: 2,
                title: "Gödel, Escher, Bach",
                author: "Douglas Hofstadter",
                discipline: "인지과학 • 철학",
                coreFramework: "이상한 고리 (Strange Loops) & 자기 참조",
                keyPrinciples: [
                    {
                        text: "이상한 고리: 스스로를 참조하는 시스템",
                        summary: "이상한 고리는 위계 구조의 단계를 따라 올라가거나 내려가다 보면 어느새 다시 시작점에 도착하게 되는 현상입니다. 에셔의 '올라가는 것과 내려가는 것' 그림이나 바흐의 무한히 상승하는 캐논이 이를 시각화/청각화합니다. 호프스테터는 이러한 자기 참조적 고리가 단순한 물질적 기질(뉴런)에서 '자아'라는 추상적인 의미가 발생하는 핵심 메커니즘이라고 주장합니다. 즉, 의식은 거대한 기호 시스템의 이상한 고리에서 피어납니다."
                    },
                    {
                        text: "동형성 (Isomorphism): 시스템 간의 구조적 대응",
                        summary: "동형성은 서로 다른 두 시스템 사이의 정보 보존 매핑을 의미합니다. 수학적 형식 체계와 음악, 혹은 그림 사이에서 동일한 논리적 구조가 발견될 때 우리는 그 속에 담긴 '의미'를 정보로 받아들입니다. 저자는 괴델의 불완전성 정리를 통해 수학 자체가 그 구조 안에 다른 논리를 담을 수 있음을 보여주며, 인간의 뇌 또한 특정 형식적 체계 위에서 세계를 모델링하는 동형성을 통해 지능을 발현한다고 설명합니다."
                    },
                    {
                        text: "의미는 기질이 아니라 패턴에서 발생함",
                        summary: "지능과 의미는 하드웨어(뇌의 단백질이나 컴퓨터의 칩)에 내재된 것이 아니라, 그 위에서 춤추는 복잡한 상징들의 패턴에서 나옵니다. 개미 한 마리는 단순하지만 개미집 전체는 고도의 지능을 보이는 것처럼, 단순한 미시적 규칙들이 중첩되어 고도의 거시적 의미를 만들어냅니다. 저자는 '하드웨어'와 '소프트웨어'의 경계를 넘나들며, 인간의 생각과 의지 또한 물질계의 물리 법칙 위에서 형성된 추상적 패턴의 결과물임을 논증합니다."
                    }
                ],
                color: "#457b9d",
                height: 130
            },
            {
                id: 5,
                title: "ADHD 2.0",
                author: "Edward M. Hallowell & John J. Ratey",
                discipline: "신경과학 • 심리학",
                coreFramework: "광범위한 주의력 특성 (VAT) & 연결",
                keyPrinciples: [
                    {
                        text: "신경다양성 관점 (ADHD는 결함이 아닌 차이)",
                        summary: "ADHD는 해결해야 할 질병이 아니라, 독특하게 배선된 뇌의 한 유형입니다. 에드워드 할로웰 박사는 ADHD를 '페라리 엔진을 가졌지만 자전거 브레이크를 가진 뇌'라고 묘사합니다. 이는 때로 주의가 산만하고 조절이 힘들 수 있지만, 반대로 엄청난 창의성, 추진력, 직관력을 가질 수 있음을 의미합니다. 사회적 낙인에서 벗어나 자신의 뇌가 가진 고유한 작동 방식을 이해하고 이를 장점으로 승화시키는 관점의 전환이 핵심입니다."
                    },
                    {
                        text: "DMN(기본 상태 네트워크)과 TPN(과제 수행 네트워크)의 상호작용",
                        summary: "ADHD 뇌는 쉬고 있을 때 활성화되는 DMN과 집중할 때 활성화되는 TPN 사이의 전환이 매끄럽지 않습니다. 특히 DMN이 비정상적으로 강력하게 개입하여 과거의 부정적인 생각이나 공상에 빠지게 하는데, 할로웰은 이를 '악령의 가스등'이라고 부릅니다. 이를 극복하려면 집중이 필요한 과제에 몰입함으로써 TPN을 활성화시키고 DMN의 부정적 간섭을 차단해야 하며, 명상이나 소뇌 자극 운동 등이 큰 도움이 된다고 설명합니다."
                    },
                    {
                        text: "연결의 힘 ('비타민 C'로서의 연결)",
                        summary: "ADHD인들에게 사회적 연결과 정서적 유대감은 단순한 인간관계를 넘어, 뇌 기능을 건강하게 유지하는 필수 영양소와 같습니다. 긍정적인 관계에서의 고립은 코르티솔 수치를 높이고 뇌의 전두엽 기능을 약화시킵니다. 저자는 'The other Vitamin C(Connection)'라는 개념을 통해, 사랑받고 인정받는 느낌이 ADHD 치료제만큼이나 강력한 효과를 낸다고 주장합니다. 신뢰할 수 있는 공동체와의 연결은 도파민을 생성하고 심리적 안정감을 제공합니다."
                    }
                ],
                color: "#4cc9f0",
                height: 120
            },
            {
                id: 11,
                title: "The Architecture of Artificial Thought",
                author: "FocusRefresh",
                discipline: "인지과학 • AI 온톨로지",
                coreFramework: "Hierarchical Knowledge Structures",
                keyPrinciples: [
                    {
                        text: "시맨틱 온톨로지 설계",
                        summary: "단순한 데이터 저장을 넘어, 지식 간의 관계를 정의하는 온톨로지를 설계합니다. 이를 통해 AI는 파편화된 정보가 아닌, 논리적으로 연결된 지식 체계를 기반으로 사고할 수 있습니다."
                    },
                    {
                        text: "계층적 지식 구조",
                        summary: "지식을 추상화 레벨에 따라 계층적으로 조직하여, 거시적인 아키텍처부터 미세한 구현 디테일까지 체계적으로 탐색하고 이해할 수 있는 구조를 만듭니다."
                    }
                ],
                color: "#606c38",
                height: 130
            }
        ]
    },
    {
        category: "시스템 및 아키텍처 (SYSTEMS & ARCHITECTURE)",
        books: [
            {
                id: 6,
                title: "The Compass Protocol",
                author: "FocusRefresh",
                discipline: "AI 아키텍처 • 시스템 설계",
                coreFramework: "Cognitive Operating System",
                keyPrinciples: [
                    {
                        text: "AI를 '시스템-유기체'로 취급",
                        summary: "KIBAN 프레임워크는 일시적인 프롬프트를 넘어 영구적인 '인지 운영 체제'로 패러다임을 전환합니다. AI를 단순히 질문에 답하는 도구가 아니라, 스스로 판단하고 학습하며 진화하는 하나의 생태계로 바라봅니다. 이는 반복적인 실패와 마찰 속에서 탄생한 실전형 아키텍처입니다."
                    },
                    {
                        text: "Behavioral Invariants (Kernel)",
                        summary: "CLAUDE.md와 같은 커널 파일은 시스템의 행동 불변성을 강제합니다. 이는 단순한 제안이 아니라, 단 한 단어가 생성되기 전부터 추론 과정을 지배하는 시스템의 기본 규칙입니다. 시스템이 일관된 논리와 가치관을 유지하게 만드는 핵심 장치입니다."
                    },
                    {
                        text: "Persistent Memory (RAM)",
                        summary: "컨텍스트 윈도우가 가득 차면 사라지는 휘발성 메모리가 아니라, 세션을 가로질러 우선순위, 결정 사안, 패턴을 축적하는 영구적 작업 메모리(MEMORY.md)를 구축합니다. 이를 통해 AI는 사용자와의 대화가 길어질수록 점점 더 똑똑해지고 맞춤화됩니다."
                    }
                ],
                color: "#2a9d8f",
                height: 125
            }
        ]
    },
    {
        category: "AI 엔지니어링 (AI ENGINEERING)",
        books: [
            {
                id: 7,
                title: "DSPy: Programmatic Prompting",
                author: "FocusRefresh",
                discipline: "프롬프트 엔지니어링",
                coreFramework: "Programming Instead of Prompting",
                keyPrinciples: [
                    {
                        text: "자동 프롬프트 최적화",
                        summary: "DSPy는 사람이 직접 문장을 수정하는 대신, 정의된 메트릭에 따라 프롬프트를 자동으로 최적화합니다. 이는 시행착오를 줄이고 모델이 바뀔 때마다 프롬프트를 새로 짤 필요가 없게 만들어줍니다."
                    },
                    {
                        text: "프로그램 방식의 파이프라인",
                        summary: "LLM 애플리케이션을 단순한 문자열 조합이 아니라, 모듈화된 프로그램으로 구축합니다. 각 모듈은 독립적으로 테스트 가능하며, 복잡한 워크플로우를 체계적으로 관리할 수 있습니다."
                    }
                ],
                color: "#4361ee",
                height: 115
            },
            {
                id: 8,
                title: "Red-Bandit Routing",
                author: "FocusRefresh",
                discipline: "에이전트 오케스트레이션",
                coreFramework: "Multi-Armed Bandit Routing",
                keyPrinciples: [
                    {
                        text: "지능형 자원 할당 (ROI 기반)",
                        summary: "모든 아이디어나 에이전트에 자원을 고르게 배분하는 대신, 기대 수익(ROI)이 높은 곳에만 토큰과 연산력을 집중합니다. 이를 통해 불필요한 비용을 60% 이상 절감할 수 있습니다."
                    },
                    {
                        text: "Anchored Synthesis",
                        summary: "여러 전문가 에이전트의 출력을 단순히 합치는 것이 아니라, 최종 검증 과정을 거쳐 하나의 일관되고 신뢰할 수 있는 결과물로 통합합니다."
                    }
                ],
                color: "#f72585",
                height: 110
            },
            {
                id: 12,
                title: "NotebookLM CLI & Audio",
                author: "FocusRefresh",
                discipline: "AI 도구 • 자동화",
                coreFramework: "Transcript-Driven Retrieval",
                keyPrinciples: [
                    {
                        text: "소스 기반 생성 (Source-Grounded)",
                        summary: "모든 환각(Hallucination)을 방지하기 위해 제공된 소스 문서에만 기반하여 지식을 추출하고 답변을 생성하는 엄격한 프로세스를 따릅니다."
                    },
                    {
                        text: "Audio Overview 합성",
                        summary: "방대한 텍스트 정보를 핵심 위주로 요약하여 오디오 형태의 브리핑으로 변환함으로써, 지식 습득의 효율성을 극대화합니다."
                    }
                ],
                color: "#00b4d8",
                height: 105
            }
        ]
    },
    {
        category: "비즈니스 및 운영 (BUSINESS & OPS)",
        books: [
            {
                id: 9,
                title: "LLC Bookkeeper & Tax AI",
                author: "FocusRefresh",
                discipline: "비즈니스 자동화",
                coreFramework: "Autonomous Legal & Finance Agents",
                keyPrinciples: [
                    {
                        text: "거래 자동 분류 및 최적화",
                        summary: "AI를 활용하여 비즈니스 거래를 자동으로 분류하고 세무 규정에 맞게 정리합니다. 이는 수동 입력 오류를 방지하고 실시간 재무 가시성을 확보하게 해줍니다."
                    },
                    {
                        text: "지능형 규제 대응",
                        summary: "복잡한 법적, 세무적 요구 사항을 실시간으로 감시하고 적절한 조치를 제안하거나 실행하여 리스크를 관리합니다."
                    }
                ],
                color: "#fb8500",
                height: 120
            },
            {
                id: 13,
                title: "AI-Powered Project Wiki IA",
                author: "FocusRefresh",
                discipline: "지식 관리 • 문서 자동화",
                coreFramework: "Structural Codebase Analysis",
                keyPrinciples: [
                    {
                        text: "근거 기반 위키 작성",
                        summary: "추측을 배제하고 코드와 설정을 분석하여 실질적인 근거가 있는 내용으로만 위키를 구성합니다. 이는 개발자가 즉시 활용 가능한 실용적인 문서를 보장합니다."
                    },
                    {
                        text: "온보딩 최적화 아키텍처",
                        summary: "사용자가 프로젝트에 빠르게 적응할 수 있도록 온보딩, 실행, 아키텍처, 데이터 흐름 순으로 지식을 배치하는 정보 설계(IA)를 적용합니다."
                    }
                ],
                color: "#fca311",
                height: 110
            }
        ]
    },
    {
        category: "영향력 및 언어 (INFLUENCE & LANGUAGE)",
        books: [
            {
                id: 3,
                title: "Influence",
                author: "Robert Cialdini",
                discipline: "심리학 • 마케팅",
                coreFramework: "설득의 6가지 원칙",
                keyPrinciples: [
                    {
                        text: "호혜성: 받은 만큼 돌려주려는 의무감",
                        summary: "호혜성의 원칙은 다른 사람이 우리에게 호의를 베풀었을 때, 우리도 그에 상응하는 호의를 되돌려 주어야 한다는 사회적 압력을 이용합니다. 식당에서 계산서와 함께 사탕을 주는 아주 작은 행동만으로도 팁 금액이 크게 늘어나는 것이 이 원칙의 전형적인 사례입니다. 사람들은 빚진 상태를 불편해하기 때문에 먼저 베풀면 상대방은 '예'라고 대답하기가 훨씬 쉬워집니다. 이는 강력한 설득의 도구가 되지만 상업적 목적으로 남용될 수 있어 주의가 필요합니다."
                    },
                    {
                        text: "사회적 증거: 타인의 행동을 따르는 경향",
                        summary: "사람들은 적절한 행동이 무엇인지 결정할 때 주변 사람들의 판단을 근거로 삼습니다. 특히 상황이 불확실하고 타인이 우리와 비슷하다고 느낄 때 이 원칙은 극대화됩니다. 호텔 수건 재사용 캠페인에서 '손님 대부분이 참여하고 있습니다'라는 메시지가 도덕적 호소보다 훨씬 효과적인 이유가 여기에 있습니다. 소셜 미디어의 리뷰나 베스트셀러 순위 또한 우리가 타인의 선택을 신뢰하는 군중 심리를 이용한 사회적 증거의 강력한 사례입니다."
                    },
                    {
                        text: "희소성: 가질 수 없을수록 더 간절히 원함",
                        summary: "사물의 가치는 그것이 얼마나 희귀한가, 혹은 얼마나 손실의 가능성이 있는가에 따라 결정됩니다. '한정 판매', '마감 임박'과 같은 마케팅 문구는 사람들에게 선택의 기회를 잃을지도 모른다는 상실 공포(Loss Aversion)를 자극합니다. 저자는 가치가 중립적인 것조차 희소해지면 사람들에게 훨씬 매력적으로 보인다는 점을 입증했습니다. 이는 합리적 판단을 마비시키고 성급한 행동을 유발하므로, 진정으로 그 물건의 효용성이 필요한지 냉정히 따질 필요가 있습니다."
                    }
                ],
                color: "#f4a261",
                height: 115
            }
        ]
    },
    {
        category: "전략 및 혁신 (STRATEGY & DISRUPTION)",
        books: [
            {
                id: 4,
                title: "Zero to One",
                author: "Peter Thiel",
                discipline: "비즈니스 • 혁신",
                coreFramework: "수직적 진보 & 독점",
                keyPrinciples: [
                    {
                        text: "기술은 0에서 1로 가는 과정임",
                        summary: "수평적 진보는 단순히 이미 있는 것을 복사하는 것(1에서 N)을 의미하지만, 수직적 진보는 이전에 존재하지 않던 새로운 것을 창조하는 것(0에서 1)을 의미합니다. 진정한 기술 혁신은 후자이며, 이는 세상을 근본적으로 변화시킵니다. 피터 틸은 단순한 점진적 개선 대신 세상을 완전히 다른 관점에서 바라보고 새로운 패러다임을 제시하는 기업가 정신을 강조합니다. 0에서 1로 가는 길은 모험적이며 미지의 영역을 개척하는 극소수의 혁신가들에게만 허락됩니다."
                    },
                    {
                        text: "경쟁은 패배자들의 것; 독점을 구축하라",
                        summary: "경쟁이 치열한 시장에서는 이윤이 모두 사라집니다. 반면 독점 기업은 자신들만의 독특한 가치를 창출함으로써 높은 수익을 유지하고 지속적인 혁신을 가능하게 합니다. 여기서 독점이란 부정한 힘이 아니라 다른 누구도 제공하지 못하는 뛰어난 서비스를 제공하는 상태를 말합니다. 저자는 작은 틈새 시장을 장악한 뒤 점차 확장하여 독점적 우위를 확보하는 것이 위대한 기업이 되는 정석적인 전략임을 역설하며, 경쟁의 늪에 빠져 정작 중요한 혁신을 잊어서는 안 된다고 조언합니다."
                    },
                    {
                        text: "거듭제곱 법칙이 투자 성공을 지배함",
                        summary: "벤처 캐피털의 세계에서는 소수의 성공한 기업이 전체 포트폴리오의 나머지 모든 기업을 합친 것보다 더 많은 가치를 창출합니다. 즉, 성과가 평균적으로 분포하지 않고 거듭제곱 법칙을 따른다는 것입니다. 이는 투자뿐만 아니라 개인의 시간 관리나 역량 계발에도 적용됩니다. 우리는 수많은 평범한 것들에 에너지를 분산하기보다, 기하급수적으로 성장할 가능성이 있는 단 하나의 압도적인 기회에 집중해야 합니다. 이 원칙은 '다재다능'보다 '절대적 우위'의 중요성을 환기시킵니다."
                    }
                ],
                color: "#2a9d8f",
                height: 105
            }
        ]
    }
];

function initLibrary() {
    const shelfContainer = document.getElementById('shelf-container');
    const panelContent = document.getElementById('panel-content');
    const placeholder = document.querySelector('.panel-placeholder');
    const modal = document.getElementById('summary-modal');
    const modalClose = document.getElementById('modal-close');
    const modalBody = document.getElementById('modal-body');
    const frameworkCountEl = document.getElementById('framework-count');
    const disciplineCountEl = document.getElementById('discipline-count');

    let totalFrameworks = 0;
    const disciplines = new Set();


    KNOWLEDGE_DATA.forEach(categoryData => {
        const shelf = document.createElement('div');
        shelf.className = 'shelf';

        const title = document.createElement('div');
        title.className = 'shelf-title';
        title.textContent = `— ${categoryData.category} —`;

        const booksRow = document.createElement('div');
        booksRow.className = 'books-row';

        categoryData.books.forEach(bookData => {
            const book = document.createElement('div');
            book.className = 'book';
            book.style.setProperty('--book-color', bookData.color);
            book.style.setProperty('--height', `${bookData.height}px`);

            const titleVertical = document.createElement('div');
            titleVertical.className = 'book-title-vertical';
            titleVertical.textContent = bookData.title;

            book.appendChild(titleVertical);

            book.addEventListener('click', () => {
                document.querySelectorAll('.book').forEach(b => b.classList.remove('active'));
                book.classList.add('active');
                showDetail(bookData);
            });

            booksRow.appendChild(book);
        });

        const base = document.createElement('div');
        base.className = 'shelf-base';

        shelf.appendChild(title);
        shelf.appendChild(booksRow);
        shelf.appendChild(base);

        shelfContainer.appendChild(shelf);

        categoryData.books.forEach(book => {
            totalFrameworks++;
            disciplines.add(book.discipline);
        });
    });

    if (frameworkCountEl) frameworkCountEl.textContent = `${totalFrameworks}가지 프레임워크`;
    if (disciplineCountEl) disciplineCountEl.textContent = `${disciplines.size}가지 학문 분야`;

    function showDetail(book) {
        placeholder.classList.add('hidden');
        panelContent.classList.remove('hidden');

        panelContent.innerHTML = `
            <h2>${book.author}</h2>
            <p style="font-style: italic; color: #666; margin-bottom: 1rem;">${book.title}</p>
            
            <div class="detail-section">
                <h3>학문 분야 (DISCIPLINE)</h3>
                <p>${book.discipline}</p>
            </div>
            
            <div class="detail-section">
                <h3>핵심 프레임워크</h3>
                <p><strong>└ ${book.coreFramework}</strong></p>
            </div>
            
            <div class="detail-section">
                <h3>주요 원칙 (클릭하여 상세 정보 확인)</h3>
                <ul class="key-principles" id="principle-list">
                    ${book.keyPrinciples.map((p, idx) => `<li data-idx="${idx}">${p.text}</li>`).join('')}
                </ul>
            </div>
        `;

        // Add event listeners to principles
        const listItems = document.querySelectorAll('#principle-list li');
        listItems.forEach(item => {
            item.addEventListener('click', () => {
                const idx = item.getAttribute('data-idx');
                showSummaryModal(book.keyPrinciples[idx]);
            });
        });
    }

    function showSummaryModal(principle) {
        modalBody.innerHTML = `
            <h2>${principle.text}</h2>
            <p>${principle.summary}</p>
        `;
        modal.classList.remove('hidden');
    }

    modalClose.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
}

document.addEventListener('DOMContentLoaded', initLibrary);
