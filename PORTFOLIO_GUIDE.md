# 📊 Data Scientist Portfolio Website

데이터 사이언티스트를 위한 전문적인 포트폴리오 웹사이트입니다. 현대적인 디자인과 완전한 기능을 갖춘 반응형 웹사이트입니다.

## ✨ 주요 기능

### 🎯 홈 섹션
- 매력적인 히어로 섹션
- 인상적인 애니메이션 효과
- 행동 요청 버튼 (Call-to-Action)

### 👤 소개 섹션
- 프로필 정보
- 경력 요약
- 성과 통계 (프로젝트, 경험, 클라이언트)

### 💻 기술 스택 섹션
- 프로그래밍 언어
- 데이터 분석 & 시각화 도구
- 머신러닝 & AI 프레임워크
- 데이터베이스 & 개발 도구
- 웹 개발 기술
- 클라우드 & 배포 서비스

### 🚀 프로젝트 섹션
- 9개의 샘플 프로젝트
- 카테고리별 필터링 (머신러닝, 데이터 분석, 웹 애플리케이션)
- 프로젝트별 기술 스택 표시
- GitHub 링크 및 데모 링크
- 동적 프로젝트 로딩

### 📝 블로그 섹션
- 블로그 포스트 카드
- 날짜 표시
- 더 보기 링크

### 📧 연락처 섹션
- 이메일, 전화, 위치 정보
- 소셜 미디어 링크 (GitHub, LinkedIn, Twitter, Kaggle)
- 연락 폼
- 폼 검증 및 알림

### 🎨 디자인 특징
- 현대적인 그라디언트 색상 스키마
- 반응형 디자인 (모바일, 태블릿, 데스크톱)
- 부드러운 애니메이션 효과
- 인터랙티브 요소
- 접근성 고려

## 📁 파일 구조

```
homepage/
├── index.html          # 메인 HTML 파일
├── styles.css         # CSS 스타일시트
├── script.js          # JavaScript 기능
├── projects.json      # 프로젝트 데이터
├── README.md          # 프로젝트 설명서
└── images/            # 이미지 폴더 (선택사항)
    ├── profile.jpg    # 프로필 이미지
    └── projects/      # 프로젝트 이미지
```

## 🚀 사용 방법

### 1. 웹사이트 실행
로컬 서버를 실행하여 웹사이트를 확인할 수 있습니다:

```bash
# Python 3 사용
python -m http.server 8000

# 또는 Python 2
python -m SimpleHTTPServer 8000

# Node.js http-server 사용
npx http-server

# Live Server VS Code 확장 프로그램 사용
# VS Code에서 index.html 우클릭 -> "Open with Live Server"
```

그 후 브라우저에서 `http://localhost:8000` 접속

### 2. 개인정보 수정

#### HTML 수정 (index.html)
- 이름, 이메일, 전화번호 업데이트
- SNS 링크 수정
- 약력 및 통계 정보 수정

```html
<!-- 연락처 섹션 예시 -->
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="tel:+82-10-1234-5678">+82-10-1234-5678</a>
```

#### 프로젝트 추가 (projects.json)
```json
{
  "id": 10,
  "title": "프로젝트 제목",
  "category": "machine-learning",
  "description": "프로젝트 설명",
  "image": "🎯",
  "technologies": ["Python", "Scikit-learn"],
  "github": "https://github.com/username/repo",
  "demo": "https://example.com"
}
```

### 3. 이미지 추가

프로필 이미지 변경:
```html
<!-- profile-placeholder를 이미지로 변경 -->
<img src="images/profile.jpg" alt="프로필" class="profile-image">
```

프로젝트 이미지 추가:
```json
{
  "image": "images/projects/project1.jpg"
}
```

## 🎨 색상 커스터마이징

`styles.css`의 CSS 변수 수정:

```css
:root {
    --primary-color: #6366f1;      /* 주요 색상 */
    --secondary-color: #8b5cf6;    /* 보조 색상 */
    --accent-color: #ec4899;       /* 강조 색상 */
    --dark-bg: #0f172a;            /* 어두운 배경 */
    --light-bg: #f8fafc;           /* 밝은 배경 */
}
```

## 📱 반응형 디자인

웹사이트는 다음 화면 크기에 최적화되어 있습니다:
- 📱 모바일: 320px ~ 768px
- 💻 태블릿: 768px ~ 1024px
- 🖥️ 데스크톱: 1024px 이상

## 🔧 사용된 기술

- **HTML5**: 시맨틱 마크업
- **CSS3**: 그리드, 플렉스박스, 애니메이션
- **JavaScript (ES6+)**: 상호작용 기능
- **Font Awesome**: 아이콘 라이브러리

### 외부 라이브러리
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

## ✅ 체크리스트

포트폴리오를 배포하기 전에 다음을 확인하세요:

- [ ] 개인정보 업데이트 (이름, 이메일, 전화)
- [ ] SNS 링크 수정
- [ ] 프로젝트 정보 추가 및 링크 확인
- [ ] 프로필 이미지 추가
- [ ] 블로그 포스트 링크 추가
- [ ] 전체 페이지 테스트 (데스크톱, 모바일)
- [ ] 양식 제출 기능 테스트
- [ ] SEO 메타데이터 수정

## 🌐 배포 옵션

### GitHub Pages
```bash
git add .
git commit -m "Deploy portfolio website"
git push origin main
```

GitHub 저장소 설정에서 "Pages" 섹션을 활성화합니다.

### Netlify
1. [netlify.com](https://netlify.com)에 가입
2. GitHub 저장소 연결
3. 자동 배포 설정

### Vercel
1. [vercel.com](https://vercel.com)에 가입
2. GitHub 저장소 연결
3. 프로젝트 배포

## 📧 연락 폼 기능

현재 연락 폼은 프론트엔드에서만 검증됩니다. 이메일 전송을 활성화하려면:

### 옵션 1: Formspree 사용
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- 폼 필드 -->
</form>
```

### 옵션 2: EmailJS 사용
```javascript
emailjs.send('service_id', 'template_id', {
    to_email: email,
    message: message
});
```

## 🎓 추가 기능 아이디어

- [ ] 다크 모드 지원
- [ ] 다국어 지원 (한글, 영어)
- [ ] 프로젝트 상세 페이지
- [ ] 기술 블로그 통합
- [ ] 뉴스레터 구독
- [ ] 검색 기능
- [ ] 댓글 시스템
- [ ] 방문자 분석

## 🔒 보안 팁

- 이메일을 `.env` 파일에 저장
- GitHub에 민감한 정보 업로드 금지
- 정기적으로 의존성 업데이트
- HTTPS 사용 확인

## 📊 성능 최적화

- 이미지 압축 사용
- CSS 최소화
- JavaScript 번들 최적화
- Lazy loading 구현
- 캐싱 정책 설정

## 🐛 문제 해결

### 프로젝트가 로드되지 않음
- `projects.json` 파일이 같은 디렉토리에 있는지 확인
- 브라우저 콘솔에서 오류 확인
- CORS 정책 확인

### 애니메이션이 작동하지 않음
- CSS 애니메이션 브라우저 지원 확인
- 성능 설정 확인 (GPU 가속)

### 폼 제출 실패
- JavaScript 콘솔에서 오류 확인
- 이메일 형식 검증
- 네트워크 연결 확인

## 📚 참고 자료

- [MDN Web Docs](https://developer.mozilla.org)
- [CSS-Tricks](https://css-tricks.com)
- [JavaScript.info](https://javascript.info)
- [Font Awesome Icons](https://fontawesome.com/icons)

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 공개됩니다.

## 👨‍💻 기여

이 프로젝트를 개선하고 싶으신가요?
1. Fork 하기
2. Feature 브랜치 생성 (`git checkout -b feature/AmazingFeature`)
3. 변경사항 커밋 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 Push (`git push origin feature/AmazingFeature`)
5. Pull Request 생성

## 📞 지원

문제가 발생하거나 질문이 있으시면 이슈를 등록해주세요.

---

**마지막 업데이트**: 2024년 11월 27일

**버전**: 1.0.0

**상태**: ✅ 완성 및 배포 준비 완료
