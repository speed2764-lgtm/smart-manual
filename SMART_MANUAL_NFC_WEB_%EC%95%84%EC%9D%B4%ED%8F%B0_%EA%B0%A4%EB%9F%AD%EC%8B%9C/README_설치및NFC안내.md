# SMART MANUAL — 아이폰·갤럭시 공용 NFC 웹 매뉴얼

이 패키지는 Android Studio 프로젝트가 아닌 **웹사이트**입니다. 스마트폰에 앱을 설치할 필요 없이 Safari/Chrome 등 웹 브라우저로 볼 수 있습니다.

## 1. 먼저 미리보기

압축을 푼 뒤 `index.html`을 두 번 클릭하여 PC 브라우저에서 볼 수 있습니다. NFC 태그로 작동시키려면 인터넷에 게시해야 합니다.

## 2. 무료 배포: GitHub Pages (Windows 초보자용)

1. https://github.com 에 가입 또는 로그인합니다.
2. 우측 상단 `+` → `New repository`를 클릭합니다.
3. Repository name에 **smart-manual**을 입력하고 **Public**을 선택해 생성합니다.
4. 저장소 페이지에서 `Add file` → `Upload files`를 클릭합니다.
5. **이 ZIP 파일 자체가 아니라 ZIP을 압축 해제한 `SMART_MANUAL_WEB` 폴더 안의 내용**을 업로드하세요. 즉 저장소 최상단에 `index.html`, `styles.css`, `app.js`, `content.js`가 보여야 하며 `assets` 폴더도 있어야 합니다. 파일 또는 폴더를 화면에 끌어다 놓을 수 있습니다.
6. 아래쪽 `Commit changes`를 눌러 저장합니다.
7. 저장소 상단 `Settings` → 왼쪽 `Pages` → `Build and deployment`의 `Source`에서 `Deploy from a branch`를 선택합니다.
8. Branch를 **main**, Folder를 **/(root)** 로 설정하고 `Save`합니다.
9. Pages 설정 화면에서 공개된 실제 사이트 주소를 확인합니다. 예: `https://GITHUB-ID.github.io/smart-manual/`
10. 주소를 컴퓨터와 아이폰·갤럭시에서 먼저 열어 잘 표시되는지 확인합니다.

*주의*: 사이트는 **공개**됩니다. 개인정보나 관리자 비밀번호, 사내 비밀 등을 업로드하지 마세요. 장비 작동 내용은 학교 담당자의 검수를 받으세요.

## 3. 장비별 NFC 태그용 실제 링크 만들기

GitHub 사용자명이 `gimhaeexample`일 **경우에만** 아래처럼 됩니다. `gimhaeexample`을 본인 계정명으로 변경하세요.

- UV 프린터: `https://gimhaeexample.github.io/smart-manual/?equipment=uva3-s2`
- 레이저커팅기: `https://gimhaeexample.github.io/smart-manual/?equipment=legens-1060s`
- 3D 프린터: `https://gimhaeexample.github.io/smart-manual/?equipment=fdm-printer`
- SLA 프린터: `https://gimhaeexample.github.io/smart-manual/?equipment=sla-printer`
- 헬스케어: `https://gimhaeexample.github.io/smart-manual/?equipment=healthcare`

**지금 주소들은 실제 발급된 주소가 아니라 구조를 설명하는 예시입니다.** 웹사이트 게시를 완료하고 주소가 동작하는지 확인한 후 태그에 쓰세요.

## 4. iPhone에서 NFC 태그 기록

1. App Store에서 `NFC Tools` 설치.
2. `Write(쓰기)` → `Add a record(레코드 추가)` → `URL / URI` 선택.
3. 위에서 만든 **진짜 HTTPS 주소** 입력 → `Validate(확인)`.
4. `Write(쓰기)` → 아이폰 상단을 태그에 가까이 대기.
5. `Read(읽기)`에서 주소가 정확한지 확인.
6. NFC Tools를 닫고 잠금을 해제한 아이폰으로 태그를 읽어 알림을 눌러 매뉴얼 확인.
7. 갤럭시에서도 NFC 기능을 켜고 같은 태그를 읽어 확인.

NFC 태그는 URI/NDEF URL로 기록합니다. 태그의 읽기 전용 잠금은 최종 테스트 전까지 사용하지 마세요. 금속·자석 근처 설치는 인식 성능이 달라질 수 있어 조립한 상태로 반드시 테스트하세요.

## 5. 사진 교체

다음 파일을 새 사진으로 덮어쓰면 바뀝니다.

- `assets/images/uv_printer.png` : UV 프린터 대표 사진
- `assets/images/laser_cutter.png` : 레이저커팅기 대표 사진

단계별 사진을 넣으려면:

- UV 1단계 : `assets/images/uv_step01.jpg`
- UV 2단계 : `assets/images/uv_step02.jpg`
- ... UV 10단계 : `assets/images/uv_step10.jpg`
- 레이저 1단계 : `assets/images/laser_step01.jpg`
- ... 레이저 9단계 : `assets/images/laser_step09.jpg`

단계 사진이 없으면 자동으로 대표 사진이 표시됩니다. 파일은 **.jpg 형식**을 권장합니다.

## 6. 1~5초 MP4 영상 추가

촬영한 영상을 다음 이름으로 `assets/videos` 폴더에 넣으세요.

- `uv_step01.mp4` ~ `uv_step10.mp4`
- `laser_step01.mp4` ~ `laser_step09.mp4`

MP4(H.264), 가로 16:9, 1~5초 권장. 파일이 아직 없으면 장비 사진과 `영상 미등록` 안내를 표시합니다. 브라우저에서 자동 재생이 허용되도록 기본 음소거·반복 재생·인라인 재생으로 구성했습니다. **실제 작업 영상은 포함되어 있지 않습니다.**

파일 추가 후 GitHub 저장소의 해당 경로에 다시 업로드하면 사이트를 업데이트할 수 있습니다. **같은 URL로 업데이트하므로 태그를 다시 기록하지 않아도 됩니다.** 동영상은 저장소 및 네트워크 용량 제한을 고려하여 압축하세요.

## 7. 매뉴얼 수정

`content.js`를 메모장 또는 VS Code에서 열어 다음을 수정할 수 있습니다.

- `steps`: 작동 단계, 작업설명(`detail`), 조작 위치(`location`), 확인사항(`checks`), 완료 기준(`done`), 주의사항(`caution`)
- `safety`: 장비별 안전수칙
- `problems`: 문제해결
- `specs`: 장비정보

UV 프린터는 기본 매뉴얼을 기준으로 한 10단계 작동방법이고, 안전수칙은 요청하신 **광원 노출 금지 / 움직이는 헤드 접촉 금지 / 소재 높이 확인**의 3가지만 들어 있습니다. 레이저커팅기의 절차는 담당자 확인이 필요한 초안입니다. 다른 장비들은 임의의 절차를 넣지 않고 '준비 중'으로 표시했습니다.

## 8. Android Studio 앱과의 관계

이 웹사이트는 기존 Android 앱과 **별개**입니다. 현재 목표는 두 운영체제에서 앱 설치 없이 장비 매뉴얼을 볼 수 있도록 하는 것입니다. 추후 Android App Links / iOS Universal Links 설정을 추가할 수 있으나 지금은 필요하지 않습니다.

## 9. 최종 점검

- GitHub Pages의 공개 주소가 실제로 열리는가?
- `?equipment=uva3-s2` 붙이면 UV 프린터가 처음 표시되는가?
- `?equipment=legens-1060s` 붙이면 레이저커팅기가 처음 표시되는가?
- 단계 버튼을 눌렀을 때 사진과 설명이 보이는가?
- 실제 MP4를 업로드한 경우 단계 영상이 재생되는가?
- iPhone과 Galaxy 모두에서 NFC 스캔 후 웹사이트가 열리는가?
- 태그를 카드 프레임에 끼워도 인식되는가?

최종 배포 전 학교 시설 담당자와 사진 사용 및 안전 안내 내용을 검토하세요.
