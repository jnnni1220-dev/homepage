# 🚀 포트폴리오 웹사이트 빠른 시작 가이드

## 📦 생성된 파일 목록

```
homepage/
├── index.html              # 메인 웹페이지
├── styles.css             # 스타일시트
├── script.js              # JavaScript 상호작용
├── projects.json          # 프로젝트 데이터
├── package.json           # Node.js 패키지 설정
├── PORTFOLIO_GUIDE.md     # 상세 가이드
├── QUICKSTART.md          # 이 파일
└── images/                # 이미지 폴더
    ├── profile.jpg        # (추가 필요) 프로필 이미지
    └── projects/          # 프로젝트 이미지 폴더
```

## ⚡ 빠른 시작

### 방법 1: Python 사용 (권장)
```bash
cd /workspaces/homepage
python -m http.server 8000
```

### 방법 2: Node.js 사용
```bash
cd /workspaces/homepage
npx http-server
```

### 방법 3: VS Code Live Server
- VS Code에서 `index.html` 열기
- 우클릭 → "Open with Live Server" 선택

그 후 브라우저에서 열기:
- Python: `http://localhost:8000`
- Node.js: `http://localhost:8080`
- Live Server: `http://127.0.0.1:5500`

## 🎨 필수 수정 사항

### 1. 개인 정보 업데이트
`index.html`에서 다음을 수정하세요:

```html
<!-- 연락처 섹션 찾기 -->
<a href="mailto:your.email@example.com">your.email@example.com</a>
<a href="tel:+82-10-1234-5678">+82-10-1234-5678</a>

<!-- SNS 링크 수정 -->
<a href="https://github.com/yourusername" ...>
<a href="https://linkedin.com/in/yourprofile" ...>
```

### 2. 프로젝트 추가
`projects.json`에서 프로젝트를 추가하거나 수정하세요.

예시:
```json
{
  "id": 10,
  "title": "내 프로젝트",
  "category": "machine-learning",
  "description": "프로젝트 설명",
  "image": "🎯",
  "technologies": ["Python", "Scikit-learn"],
  "github": "https://github.com/username/repo",
  "demo": "https://example.com"
}
```

### 3. 소개 정보 수정
`index.html`의 About 섹션 수정:
- "안녕하세요!" 문구
- 경력 설명
- 통계 수정 (프로젝트, 경험, 클라이언트 수)

## 🎨 커스터마이징

### 색상 변경
`styles.css`에서 CSS 변수 수정:
```css
:root {
    --primary-color: #6366f1;      /* 메인 색상 */
    --secondary-color: #8b5cf6;    /* 보조 색상 */
    --accent-color: #ec4899;       /* 강조 색상 */
}
```

### 폰트 변경
`styles.css`의 `body` 부분 수정:
```css
body {
    font-family: 'Your Font', sans-serif;
}
```

## 📱 테스트

브라우저 개발자 도구에서 반응형 테스트:
1. F12 또는 Ctrl+Shift+I (Windows) / Cmd+Option+I (Mac)
2. 상단의 기기 아이콘 클릭
3. 다양한 화면 크기 테스트

## ✨ 주요 기능

- ✅ 반응형 디자인 (모바일, 태블릿, 데스크톱)
- ✅ 부드러운 애니메이션
- ✅ 프로젝트 필터링
- ✅ 연락 폼
- ✅ 소셜 미디어 링크
- ✅ 다크 모드 준비 완료

## 🔗 배포 가능 플랫폼

- [GitHub Pages](https://pages.github.com/) - 무료
- [Netlify](https://netlify.com/) - 무료
- [Vercel](https://vercel.com/) - 무료
- [Firebase Hosting](https://firebase.google.com/products/hosting) - 무료

## 📚 다음 단계

1. [ ] 개인정보 업데이트
2. [ ] 프로필 이미지 추가
3. [ ] 프로젝트 정보 채우기
4. [ ] 전체 페이지 테스트
5. [ ] 버전 관리에 커밋
6. [ ] 배포 플랫폼에 연결
7. [ ] 도메인 연결 (선택사항)

## 🆘 도움말

### 프로젝트가 로드 안 됨
- 브라우저 콘솔 확인 (F12)
- `projects.json`의 JSON 형식 확인
- 파일이 같은 폴더에 있는지 확인

### 이미지가 안 보임
- 이미지 경로 확인
- 이미지 파일이 `images/` 폴더에 있는지 확인

### 폼 제출 안 됨
- 이메일 형식 확인
- JavaScript 콘솔 오류 확인

## 📧 이메일 기능 활성화

연락 폼에서 이메일을 실제로 받으려면:

### Formspree 사용 (권장)
1. https://formspree.io/ 방문
2. 이메일 입력 후 프로젝트 생성
3. 받은 `form_id` 복사
4. `index.html`의 폼 태그 수정:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 📞 지원
문제가 있으면 README.md 또는 PORTFOLIO_GUIDE.md를 참고하세요.

---
**Created**: 2024년 11월 27일
**Status**: ✅ 배포 준비 완료
