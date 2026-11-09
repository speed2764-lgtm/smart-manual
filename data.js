window.SMART_EQUIPMENT = [
  {
    "id": "uva3-s2",
    "assetPrefix": "uv",
    "name": "UV 프린터",
    "model": "UVA3-S2",
    "category": "프린팅",
    "description": "UV 잉크를 사용하여 다양한 소재 표면에 이미지를 출력하는 평판 프린터입니다.",
    "imageRes": "R.drawable.uv_printer",
    "steps": [
      {
        "title": "작업 전 점검",
        "summary": "장비와 작업 환경 확인",
        "description": "프린터 주변 공간과 소재, 베드 상태를 확인합니다.",
        "checks": [
          "소재가 해당 장비에 적합한지 확인",
          "베드와 주변에 이물질이 없는지 확인",
          "환기 및 작업 환경 확인"
        ],
        "warning": "이상 발견 시 작업하지 말고 담당자에게 알리세요.",
        "substeps": []
      },
      {
        "title": "장비 준비",
        "summary": "전원 및 터치 패널 확인",
        "description": "담당자가 승인한 순서에 따라 장비를 준비하고 상태 표시를 확인합니다.",
        "checks": [
          "전원·터치 패널 상태 확인",
          "경고 또는 오류 표시 확인"
        ],
        "warning": "정확한 전원 순서는 학교의 UVA3-S2 사용 지침에 따라야 합니다.",
        "substeps": []
      },
      {
        "title": "RIP 프로그램 실행",
        "summary": "PC와 장비 연결 상태 확인",
        "description": "PC에서 장비에 지정된 RIP 프로그램을 실행해 연결 상태를 확인합니다.",
        "checks": [
          "프로그램 실행",
          "프린터 연결 표시 확인"
        ],
        "warning": "연결 오류가 있으면 임의로 설정을 바꾸지 마세요.",
        "substeps": []
      },
      {
        "title": "인쇄 파일 준비",
        "summary": "이미지 불러오기 및 배치",
        "description": "인쇄할 이미지를 불러와 크기, 회전 방향, 베드 위 위치를 확인합니다.",
        "checks": [
          "이미지 파일 선택",
          "실제 소재 크기와 인쇄 크기 비교",
          "인쇄 위치 확인"
        ],
        "warning": "파일 크기 단위 및 실제 출력 영역을 확인하세요.",
        "substeps": []
      },
      {
        "title": "소재 배치",
        "summary": "베드 위 소재 배치",
        "description": "소재를 지정된 인쇄 영역에 안정적으로 올리고 높이와 헤드 간섭 가능성을 확인합니다.",
        "checks": [
          "소재 평탄도와 고정 상태 확인",
          "높이 설정 및 간섭 위험 확인"
        ],
        "warning": "헤드 충돌 위험이 있으면 즉시 작업을 중지하세요.",
        "substeps": []
      },
      {
        "title": "인쇄 설정",
        "summary": "출력 조건 최종 확인",
        "description": "승인된 프로파일을 기준으로 출력 크기, 잉크 설정 및 인쇄 품질을 확인합니다.",
        "checks": [
          "출력 모드와 파일 확인",
          "색상·화이트·바니시 설정 확인",
          "승인된 프로파일 사용"
        ],
        "warning": "잉크 공급·세척·공장 설정은 실습생 임의로 변경하지 않습니다.",
        "substeps": []
      },
      {
        "title": "인쇄 실행",
        "summary": "출력 시작 및 상태 관찰",
        "description": "모든 설정을 확인한 뒤 출력하고, 작업 중 장비의 이상 징후를 관찰합니다.",
        "checks": [
          "출력 파일·소재 위치 재확인",
          "인쇄 중 이상 소음·오류 확인"
        ],
        "warning": "작동 중 UV 광원 및 이동 부품에 접근하지 마세요.",
        "substeps": []
      },
      {
        "title": "작업 종료",
        "summary": "결과물 확인 및 정리",
        "description": "장비가 안전한 상태가 된 뒤 출력물을 회수하고 작업 공간을 정리합니다.",
        "checks": [
          "인쇄 완료 확인",
          "완성품 및 베드 상태 확인",
          "담당 절차에 따라 마무리"
        ],
        "warning": "종료·유지관리 작업은 모델별 공식 절차를 따르세요.",
        "substeps": []
      }
    ],
    "safety": [
      {
        "title": "UV 광원 직접 노출 주의",
        "description": "작동 중 UV 광원을 직접 보거나 보호 구조를 해제하지 마세요."
      },
      {
        "title": "이동 부품 접촉 금지",
        "description": "인쇄 중 움직이는 헤드와 베드에 손을 넣지 마세요."
      },
      {
        "title": "소재 높이 확인",
        "description": "소재와 헤드가 충돌하지 않도록 높이 및 고정 상태를 점검하세요."
      },
      {
        "title": "환기 및 잉크 취급",
        "description": "잉크의 안전자료(SDS)와 학교 보호구·환기 지침을 따르세요."
      },
      {
        "title": "임의 유지관리 금지",
        "description": "강제 세척·잉크 계통·공장 설정은 담당자에게 문의하세요."
      }
    ],
    "troubles": [
      {
        "title": "Z축 센서 오류 알림이 떠요",
        "category": "안전",
        "brief": "소재 간섭이나 Z축 감지 문제가 원인일 수 있어요.",
        "actions": [
          "인쇄를 중단하고 오류 문구를 확인합니다.",
          "소재 높이와 헤드 이동 경로의 장애물을 눈으로 확인합니다.",
          "센서 강제 해제나 축 수동 이동 없이 담당자에게 점검을 요청합니다."
        ],
        "staffRequired": true
      },
      {
        "title": "인쇄가 실행되지 않아요",
        "category": "연결",
        "brief": "전원·장비 상태·RIP 작업 전송 문제를 확인해요.",
        "actions": [
          "프린터 전원 및 화면 경고를 확인합니다.",
          "RIP 프로그램의 장비 연결 및 작업 대기열을 확인합니다.",
          "문제가 반복되면 오류 화면을 기록해 담당자에게 알립니다."
        ],
        "staffRequired": false
      },
      {
        "title": "잉크가 번지거나 묻어나요",
        "category": "인쇄",
        "brief": "소재 오염, 헤드 간격 또는 UV 경화 조건을 확인해요.",
        "actions": [
          "소재 표면의 먼지·유분·수분을 확인합니다.",
          "승인된 소재 및 인쇄 프로파일이 맞는지 확인합니다.",
          "UV 램프나 헤드를 직접 조정하지 말고 담당자에게 점검을 요청합니다."
        ],
        "staffRequired": true
      },
      {
        "title": "인쇄물에 줄이 생기거나 흐려요",
        "category": "인쇄",
        "brief": "노즐 상태나 인쇄 프로파일 문제일 수 있어요.",
        "actions": [
          "파일과 출력 프로파일을 확인합니다.",
          "담당자가 허용한 노즐 점검 기능만 사용합니다.",
          "잉크·헤드 세척은 임의로 하지 않고 담당자에게 요청합니다."
        ],
        "staffRequired": true
      },
      {
        "title": "인쇄 위치가 어긋나요",
        "category": "인쇄",
        "brief": "소재 배치와 작업 원점·크기를 확인해요.",
        "actions": [
          "소재 고정 상태를 확인합니다.",
          "작업 파일의 크기·회전·기준점을 확인합니다.",
          "출력 전 미리보기와 실제 베드 배치를 비교합니다."
        ],
        "staffRequired": false
      },
      {
        "title": "잉크가 소재에 잘 붙지 않아요",
        "category": "인쇄",
        "brief": "소재 적합성이나 표면 전처리 문제일 수 있어요.",
        "actions": [
          "해당 소재가 인쇄 가능한 재질인지 확인합니다.",
          "소재 표면 상태와 승인된 전처리 지침을 확인합니다.",
          "프로파일 변경·추가 경화는 담당자와 진행합니다."
        ],
        "staffRequired": false
      }
    ],
    "specs": [
      "모델명",
      "to",
      "UVA3-S2",
      "분류",
      "to",
      "A3 UV 평판 프린터",
      "베드 규격",
      "to",
      "320 × 470 mm (제품 소개 기준)",
      "소재 높이",
      "to",
      "최대 95 mm (제품 소개 기준)",
      "프린트 헤드",
      "to",
      "Epson i3200(8) U1HD (제품 소개 기준)",
      "제작사 안내",
      "to",
      "https://no1uv.com/A3",
      "주의",
      "to",
      "장비별 RIP 버전·설정은 실물 확인 필요"
    ],
    "location": [
      "장비 위치",
      "to",
      "A 창의관 실습실 203호"
    ],
    "parts": [],
    "image": "assets/images/uv_printer.png",
    "displaySpecs": [
      [
        "제조사",
        "RIIN (장비 자료 기준)"
      ],
      [
        "모델명",
        "UVA3-S2"
      ],
      [
        "작업 영역 (X·Y·Z)",
        "320 × 470 × 최대 95 mm (자료 기준)"
      ],
      [
        "사용 프로그램",
        "RIIN RIP"
      ],
      [
        "공식 홈페이지",
        "https://no1uv.com/A3"
      ]
    ]
  },
  {
    "id": "legens-1060s",
    "assetPrefix": "laser",
    "name": "레이저커팅기",
    "model": "LEGENS 1060S",
    "category": "가공",
    "description": "레이저를 이용해 승인된 소재를 절단하거나 표면에 이미지를 각인하는 장비입니다.",
    "imageRes": "R.drawable.laser_cutter",
    "steps": [
      {
        "title": "가공 재료 확인",
        "summary": "소재 종류와 상태 점검",
        "description": "학교에서 사용을 허용한 소재와 규격인지 확인합니다.",
        "checks": [
          "소재 허용 목록 확인",
          "가연성 주변 물품 정리"
        ],
        "warning": "PVC 등 유해가스 발생 우려 소재를 임의로 가공하지 마세요.",
        "substeps": []
      },
      {
        "title": "작업 전 안전 점검",
        "summary": "배기·냉각·장비 상태 확인",
        "description": "담당자가 정한 체크리스트로 배기 장치와 냉각 장치 등을 확인합니다.",
        "checks": [
          "배기·냉각 장치 확인",
          "덮개 및 비상정지 상태 확인"
        ],
        "warning": "배기 또는 냉각 이상 시 가공을 시작하지 마세요.",
        "substeps": []
      },
      {
        "title": "RDWork8 파일 불러오기",
        "summary": "도안 파일 가져오기",
        "description": "RDWork8에서 가공할 디자인을 불러오고 크기를 확인합니다.",
        "checks": [
          "파일 가져오기",
          "실제 재료 크기와 도안 크기 비교"
        ],
        "warning": "실제 장비와 연결된 PC에서 진행하세요.",
        "substeps": []
      },
      {
        "title": "가공 방식 설정",
        "summary": "Cut / Scan 선택",
        "description": "가공 목적에 맞게 절단(Cut) 또는 스캔 각인(Scan)을 선택합니다.",
        "checks": [
          "Cut 또는 Scan 선택",
          "가공 레이어 확인"
        ],
        "warning": "목적과 다른 가공 방식 선택 시 재료가 손상될 수 있습니다.",
        "substeps": []
      },
      {
        "title": "속도와 출력 확인",
        "summary": "승인된 설정값 사용",
        "description": "재료 두께와 장비 상태에 맞는 속도 및 Min/Max Power 값을 담당자 기준으로 확인합니다.",
        "checks": [
          "재료·두께별 승인값 확인",
          "Speed·Min Power·Max Power 확인"
        ],
        "warning": "예시 설정값을 검증 없이 적용하지 마세요.",
        "substeps": []
      },
      {
        "title": "파일 전송",
        "summary": "Download 실행",
        "description": "RDWork8에서 확인한 작업 파일을 장비 컨트롤러로 전송합니다.",
        "checks": [
          "다운로드 실행",
          "장비 파일 목록에서 작업명 확인"
        ],
        "warning": "동일 파일명과 설정이 맞는지 다시 확인하세요.",
        "substeps": []
      },
      {
        "title": "가공 위치 확인",
        "summary": "Frame 기능으로 범위 확인",
        "description": "레이저를 발사하지 않는 프레임 미리보기 기능으로 작업 범위를 확인합니다.",
        "checks": [
          "프레임 위치 확인",
          "재료 범위 이탈 여부 점검"
        ],
        "warning": "실제 레이저가 발사되는 시험 가공 기능과 혼동하지 마세요.",
        "substeps": []
      },
      {
        "title": "가공 시작",
        "summary": "덮개 닫고 작업 관찰",
        "description": "덮개를 닫고 담당자 지침에 따라 가공을 시작한 후 작업을 계속 관찰합니다.",
        "checks": [
          "덮개·배기·냉각 재확인",
          "가공 중 이상 징후 감시"
        ],
        "warning": "가공 중 자리를 비우거나 덮개를 열지 마세요.",
        "substeps": []
      },
      {
        "title": "작업 종료",
        "summary": "안전 확인 후 결과물 회수",
        "description": "가공이 완료되고 연기와 열기가 안전하게 배출된 뒤 결과물을 꺼냅니다.",
        "checks": [
          "동작 완료 확인",
          "열과 연기 상태 확인",
          "작업 공간 정리"
        ],
        "warning": "뜨거운 소재와 잔류 연기에 주의하세요.",
        "substeps": []
      }
    ],
    "safety": [
      {
        "title": "가공 중 덮개 개방 금지",
        "description": "작동 중 보호 덮개를 열거나 안전장치를 우회하지 마세요."
      },
      {
        "title": "화재 감시",
        "description": "가공 중 장비를 떠나지 말고 불꽃·연기 이상 시 즉시 중단하세요."
      },
      {
        "title": "배기와 냉각 확인",
        "description": "배기 또는 냉각이 비정상이면 작업을 시작하지 마세요."
      },
      {
        "title": "가공 소재 제한",
        "description": "학교에서 사용을 허용한 소재만 가공하세요."
      },
      {
        "title": "고온 소재 주의",
        "description": "작업 직후 소재와 내부 부품에 바로 손대지 마세요."
      }
    ],
    "troubles": [
      {
        "title": "커팅 대신 각인만 돼요",
        "category": "가공",
        "brief": "작업 모드가 Scan으로 선택되었는지 확인해요.",
        "actions": [
          "RDWork8에서 해당 레이어를 선택합니다.",
          "레이어의 모드가 Cut인지 Scan인지 확인합니다.",
          "승인된 커팅 설정을 확인한 뒤 작업을 다시 준비합니다."
        ],
        "staffRequired": false
      },
      {
        "title": "레이저가 전혀 작동하지 않아요",
        "category": "안전",
        "brief": "전원·안전 인터록·배기 또는 냉각 이상일 수 있어요.",
        "actions": [
          "작업을 중단하고 장비의 오류 표시를 확인합니다.",
          "덮개·비상정지·냉각·배기 상태를 외부에서 확인합니다.",
          "안전장치를 우회하지 말고 담당자에게 점검을 요청합니다."
        ],
        "staffRequired": true
      },
      {
        "title": "재료가 끝까지 잘리지 않아요",
        "category": "가공",
        "brief": "두께·초점 또는 승인 설정이 맞지 않을 수 있어요.",
        "actions": [
          "소재가 승인된 종류와 두께인지 확인합니다.",
          "레이어가 Cut이고 승인된 속도·출력값인지 확인합니다.",
          "반복 조사 전에 담당자에게 초점·광학계 점검을 요청합니다."
        ],
        "staffRequired": false
      },
      {
        "title": "노즐과 재료 사이 높이가 달라요",
        "category": "안전",
        "brief": "초점 높이 설정이 맞지 않을 수 있어요.",
        "actions": [
          "가공을 중단하고 재료 두께를 확인합니다.",
          "실습실에 지정된 초점 높이 기준을 확인합니다.",
          "노즐·렌즈를 임의 분해하지 말고 담당자에게 조정 요청합니다."
        ],
        "staffRequired": true
      },
      {
        "title": "커팅 위치가 어긋나요",
        "category": "가공",
        "brief": "원점 설정이나 프레임 범위를 확인해요.",
        "actions": [
          "RDWork8 파일 크기와 장비 원점을 확인합니다.",
          "Frame 기능으로 실제 가공 범위를 확인합니다.",
          "소재가 범위를 벗어나는 경우 실행하지 않습니다."
        ],
        "staffRequired": false
      },
      {
        "title": "연기 또는 불꽃이 심하게 발생해요",
        "category": "안전",
        "brief": "소재나 배기·에어 보조 상태 문제일 수 있어요.",
        "actions": [
          "즉시 작업을 중지하고 안전 지침에 따릅니다.",
          "안전을 확보한 상태에서 배기와 소재 적합성을 확인합니다.",
          "재시작하지 말고 담당자에게 보고합니다."
        ],
        "staffRequired": true
      }
    ],
    "specs": [
      "모델명",
      "to",
      "LEGENS 1060S (학교 등록 모델명)",
      "사용 프로그램",
      "to",
      "RDWork8",
      "주요 가공",
      "to",
      "승인 소재 절단 / 각인",
      "파일 전송",
      "to",
      "RDWork8 Download → 장비 파일",
      "위치 확인",
      "to",
      "Frame (레이저 비발사 미리보기)",
      "주의",
      "to",
      "속도·출력·초점 수치는 담당자 승인 후 등록"
    ],
    "location": [
      "장비 위치",
      "to",
      "A 창의관 실습실 203호"
    ],
    "parts": [],
    "image": "assets/images/laser_cutter.png",
    "displaySpecs": [
      [
        "제조사",
        "확인 필요"
      ],
      [
        "모델명",
        "LEGENS 1060S"
      ],
      [
        "작업 영역 (X·Y·Z)",
        "실습실 장비 사양 확인 필요"
      ],
      [
        "사용 프로그램",
        "RDWork8"
      ],
      [
        "공식 홈페이지",
        "확인 필요"
      ]
    ]
  },
  {
    "id": "fdm-printer",
    "assetPrefix": "fdm",
    "name": "3D 프린터 (FDM)",
    "model": "Bambu Lab X1 Carbon",
    "category": "프린팅",
    "description": "Bambu Studio를 사용하여 모델 준비부터 슬라이싱, 필라멘트 장착, 출력 및 정리까지 진행합니다.",
    "imageRes": "R.drawable.fdm_x1_carbon",
    "steps": [
      {
        "title": "3D 모델 가져오기",
        "summary": "출력할 모델 파일 준비",
        "description": "출력할 3D 모델 파일을 준비하고 STL, 3MF, STEP 등 Bambu Studio에서 지원하는 형식인지 확인합니다.",
        "checks": [
          "모델 파일 준비",
          "파일 형식과 모델의 실제 크기 확인"
        ],
        "warning": "파일 출처와 모델 치수를 확인하세요.",
        "substeps": []
      },
      {
        "title": "Bambu Studio 실행",
        "summary": "새 프로젝트와 모델 불러오기",
        "description": "PC에서 Bambu Studio를 실행하고 새 프로젝트를 만든 후 준비한 3D 모델 파일을 불러옵니다.",
        "checks": [
          "Bambu Studio 실행",
          "New Project 선택",
          "모델 불러오기 및 화면 표시 확인"
        ],
        "warning": "프로그램 버전에 따라 메뉴 명칭과 위치가 달라질 수 있습니다.",
        "substeps": []
      },
      {
        "title": "모델 설정",
        "summary": "슬라이싱 전 8가지 필수 설정",
        "description": "아래 03-1부터 03-8까지의 항목을 눌러 프린터, 모델 크기, 방향, 필라멘트, 품질, 서포트, 채움률을 순서대로 확인합니다.",
        "checks": [
          "프린터·노즐·출력판 확인",
          "모델 크기·방향 확인",
          "필라멘트·품질·서포트·채움률 확인"
        ],
        "warning": "0.20 mm 레이어 높이와 15% 채움률은 일반적인 시작값이며 모델·재료에 따라 조절해야 합니다.",
        "substeps": [
          {
            "title": "03-1 프린터 선택",
            "path": "Prepare → Printer",
            "actions": [
              "Printer 목록 열기",
              "Bambu Lab X1 Carbon 선택",
              "장착된 노즐 직경 확인",
              "실제 빌드 플레이트 종류 확인"
            ]
          },
          {
            "title": "03-2 모델 크기",
            "path": "모델 선택 → Scale",
            "actions": [
              "모델 클릭",
              "Scale 도구 선택",
              "X·Y·Z 치수 확인",
              "원하는 크기로 조절"
            ]
          },
          {
            "title": "03-3 방향과 위치",
            "path": "모델 선택 → Rotate / Lay on Face",
            "actions": [
              "모델 선택",
              "Rotate로 방향 조절",
              "Lay on Face로 바닥면 지정",
              "출력판 내부 배치 확인"
            ]
          },
          {
            "title": "03-4 필라멘트",
            "path": "Filament",
            "actions": [
              "Filament 설정 열기",
              "PLA·PETG 등 실제 재질 선택",
              "장착할 필라멘트와 설정 일치 확인"
            ]
          },
          {
            "title": "03-5 출력 품질",
            "path": "Process → Quality",
            "actions": [
              "Process 메뉴 선택",
              "품질 프리셋 확인",
              "일반 출력 시작값으로 0.20 mm Standard 검토",
              "필요한 정밀도에 따라 조절"
            ]
          },
          {
            "title": "03-6 서포트",
            "path": "Process → Support",
            "actions": [
              "돌출부·공중에 뜬 형상 확인",
              "필요하면 Enable Support 활성화",
              "불필요하면 비활성화"
            ]
          },
          {
            "title": "03-7 내부 채움률",
            "path": "Process → Strength",
            "actions": [
              "Strength 메뉴 열기",
              "Sparse Infill Density 확인",
              "일반 출력 시작값으로 15% 검토",
              "용도·강도에 따라 조절"
            ]
          },
          {
            "title": "03-8 최종 확인",
            "path": "Prepare",
            "actions": [
              "모델 크기·방향·위치",
              "프린터·노즐·빌드 플레이트",
              "필라멘트·레이어 높이",
              "서포트·내부 채움률"
            ]
          }
        ]
      },
      {
        "title": "필라멘트 장착",
        "summary": "AMS 또는 외부 스풀 홀더",
        "description": "AMS를 사용할 경우 커버를 열고 스풀을 올바른 방향으로 넣은 뒤 필라멘트 끝을 투입구에 삽입합니다. 자동 공급 및 인식 상태를 확인하고 Bambu Studio의 재료 설정과 일치시킵니다. AMS가 없으면 외부 스풀 홀더와 장비의 필라멘트 로딩 절차를 사용합니다.",
        "checks": [
          "스풀 방향 확인",
          "AMS 공급·인식 상태 확인",
          "프로그램의 재질·슬롯 설정 확인",
          "AMS 미사용 시 외부 스풀 홀더 경로 확인"
        ],
        "warning": "필라멘트가 엉키거나 잘못 삽입되면 강제로 밀지 마세요.",
        "substeps": []
      },
      {
        "title": "슬라이싱",
        "summary": "Slice Plate 및 Preview",
        "description": "Slice Plate를 누르고 완료 후 Preview에서 이동 경로, 예상 출력 시간과 필라멘트 사용량을 확인합니다.",
        "checks": [
          "Slice Plate 실행",
          "Preview 확인",
          "예상 시간·재료 사용량 확인",
          "출력 경로와 오류 점검"
        ],
        "warning": "슬라이싱 결과에 이상이 있으면 출력 전에 모델 설정을 수정하세요.",
        "substeps": []
      },
      {
        "title": "3D 프린팅 출력",
        "summary": "Print Plate → X1 Carbon",
        "description": "빌드 플레이트의 청결과 장착 상태를 확인한 뒤 Print Plate를 선택합니다. 올바른 X1 Carbon 장비와 필라멘트를 선택하고 출력 전 점검 옵션을 확인하여 시작합니다. 첫 레이어가 정상인지 관찰합니다.",
        "checks": [
          "빌드 플레이트 청결·장착 확인",
          "Print Plate에서 올바른 프린터 선택",
          "필라멘트·출력 조건 확인",
          "베드 레벨링 등 점검 옵션 확인",
          "첫 레이어 확인"
        ],
        "warning": "고온 노즐·출력판과 움직이는 부품에 손을 넣지 마세요.",
        "substeps": []
      },
      {
        "title": "출력 후 보정 및 정리",
        "summary": "냉각·분리·품질 확인",
        "description": "출력이 완료되고 출력판이 충분히 식은 후 출력물을 분리합니다. 필요한 서포트를 제거하고 표면과 치수를 확인합니다. 문제가 있다면 다음 출력을 위한 설정을 수정하고 출력판과 장비 내부를 정리합니다. 장비 자체 보정은 출력물 품질 수정과 구분하여 담당자 지침에 따라 실시합니다.",
        "checks": [
          "출력 완료·냉각 확인",
          "출력물 안전하게 분리",
          "서포트 제거",
          "표면·치수 확인",
          "출력판 및 내부 정리"
        ],
        "warning": "뜨거운 출력물·노즐·출력판을 만지지 마세요.",
        "substeps": []
      }
    ],
    "safety": [
      {
        "title": "고온 노즐·출력판 접촉 금지",
        "description": "출력 중과 직후 노즐 및 빌드 플레이트를 만지지 마세요."
      },
      {
        "title": "움직이는 부품 접촉 금지",
        "description": "작동 중 툴 헤드·벨트·내부 기구에 손을 넣지 마세요."
      },
      {
        "title": "충분한 냉각 후 분리",
        "description": "출력물이 식은 뒤 빌드 플레이트에서 안전하게 분리하세요."
      },
      {
        "title": "재료·출력 설정 일치",
        "description": "실제 필라멘트 종류와 Bambu Studio 설정이 일치하는지 확인하세요."
      },
      {
        "title": "이상 발생 시 작업 중단",
        "description": "출력 오류나 비정상 소음이 발생하면 무리하게 조작하지 말고 담당자에게 알리세요."
      }
    ],
    "troubles": [
      {
        "title": "출력 중 스파게티 현상이 생겼어요",
        "category": "출력",
        "brief": "베드 접착 실패나 서포트 붕괴가 원인일 수 있어요.",
        "actions": [
          "진행 중인 출력을 중단합니다.",
          "모델이 베드에서 떨어졌거나 서포트가 무너졌는지 확인합니다.",
          "베드 청결·모델 방향·서포트를 점검하고 재슬라이싱합니다."
        ],
        "staffRequired": false
      },
      {
        "title": "AMS에서 필라멘트 공급이 안 돼요",
        "category": "필라멘트",
        "brief": "스풀 걸림 또는 공급 경로에 장애물이 있을 수 있어요.",
        "actions": [
          "AMS 스풀의 잔량과 회전 상태를 확인합니다.",
          "PTFE 튜브가 꺾이거나 빠지지 않았는지 확인합니다.",
          "압출기 내부 걸림이 의심되면 억지로 밀지 말고 담당자에게 알립니다."
        ],
        "staffRequired": false
      },
      {
        "title": "노즐에서 필라멘트가 나오지 않아요",
        "category": "노즐",
        "brief": "노즐이나 압출기 내부 막힘일 수 있어요.",
        "actions": [
          "출력을 중지하고 화면의 오류와 노즐 온도를 확인합니다.",
          "재료 설정과 로딩 상태를 확인합니다.",
          "가열·분해·막힘 제거 작업은 담당자 지침에 따라 진행합니다."
        ],
        "staffRequired": true
      },
      {
        "title": "폐필라멘트 배출구가 막혔어요",
        "category": "필라멘트",
        "brief": "배출구 또는 수거함에 폐필라멘트가 쌓였을 수 있어요.",
        "actions": [
          "작업을 멈추고 장비가 안전한 상태인지 확인합니다.",
          "후면 배출 경로와 수거함에 쌓인 폐기물을 확인합니다.",
          "기구부 내부에 끼었으면 무리하게 빼지 않고 담당자에게 알립니다."
        ],
        "staffRequired": false
      },
      {
        "title": "노즐 주변에 필라멘트 덩어리가 생겼어요",
        "category": "노즐",
        "brief": "재료가 뭉쳐 노즐·히터·배선에 붙었을 수 있어요.",
        "actions": [
          "즉시 출력을 중단합니다.",
          "뜨거운 노즐이나 배선을 만지지 않습니다.",
          "담당자에게 제거 및 손상 점검을 요청합니다."
        ],
        "staffRequired": true
      },
      {
        "title": "첫 레이어가 베드에 붙지 않아요",
        "category": "출력",
        "brief": "베드 오염이나 플레이트 설정 불일치일 수 있어요.",
        "actions": [
          "출력판이 식은 뒤 표면을 확인합니다.",
          "Bambu Studio의 플레이트와 재료 종류가 맞는지 확인합니다.",
          "승인된 세척 방법과 베드 점검을 거쳐 재출력합니다."
        ],
        "staffRequired": false
      }
    ],
    "specs": [
      "제조사",
      "to",
      "Bambu Lab",
      "모델명",
      "to",
      "Bambu Lab X1 Carbon",
      "분류",
      "to",
      "FDM 3D 프린터",
      "사용 프로그램",
      "to",
      "Bambu Studio",
      "모델 파일",
      "to",
      "STL / 3MF / STEP 등 (프로그램 버전 확인)",
      "장비 위치",
      "to",
      "A 창의관 실습실 203호",
      "공식 안내",
      "to",
      "https://wiki.bambulab.com"
    ],
    "location": [
      "장비 위치",
      "to",
      "A 창의관 실습실 203호"
    ],
    "parts": [],
    "image": "assets/images/fdm_x1_carbon.png",
    "displaySpecs": [
      [
        "제조사",
        "Bambu Lab"
      ],
      [
        "모델명",
        "X1 Carbon"
      ],
      [
        "작업 영역 (X·Y·Z)",
        "256 × 256 × 256 mm"
      ],
      [
        "사용 프로그램",
        "Bambu Studio"
      ],
      [
        "공식 홈페이지",
        "https://bambulab.com"
      ]
    ]
  },
  {
    "id": "sla-printer",
    "assetPrefix": "sla",
    "name": "3D 프린터 (SLA)",
    "model": "Formlabs Form 4",
    "category": "프린팅",
    "description": "PreForm에서 모델을 준비하고 레진 탱크·믹서·플랫폼·카트리지를 장착해 출력하는 LFD 레진 프린터입니다.",
    "imageRes": "R.drawable.sla_form4",
    "steps": [
      {
        "title": "3D 모델 가져오기",
        "summary": "출력 파일 준비",
        "description": "출력할 STL·OBJ·3MF 파일을 준비합니다.",
        "checks": [
          "모델 파일 확인"
        ],
        "warning": "모델의 크기와 파일 형식을 확인하세요.",
        "substeps": []
      },
      {
        "title": "PreForm 실행",
        "summary": "프로그램에서 모델 열기",
        "description": "PreForm을 실행하고 준비한 모델을 불러옵니다.",
        "checks": [
          "PreForm 실행",
          "모델 불러오기"
        ],
        "warning": "프로그램 버전에 따라 메뉴 위치가 다를 수 있습니다.",
        "substeps": []
      },
      {
        "title": "모델 설정",
        "summary": "방향·서포트·레진 확인",
        "description": "모델 방향과 배치, 서포트 및 사용할 레진을 설정합니다.",
        "checks": [
          "방향·배치 확인",
          "서포트 확인",
          "레진 종류 확인"
        ],
        "warning": "실제 장착한 레진과 설정을 일치시키세요.",
        "substeps": []
      },
      {
        "title": "레진 및 장비 준비",
        "summary": "탱크·믹서·플랫폼·카트리지",
        "description": "레진 탱크와 믹서, 빌드 플랫폼을 고정하고 레진 카트리지를 장착합니다.",
        "checks": [
          "레진 탱크·믹서 고정",
          "빌드 플랫폼 고정",
          "카트리지 흔들어 혼합 후 장착·벤트 캡 열기"
        ],
        "warning": "니트릴 장갑을 착용하고 카트리지 하단 고무 밸브를 제거하지 마세요.",
        "substeps": []
      },
      {
        "title": "출력 파일 전송",
        "summary": "Form 4로 작업 보내기",
        "description": "PreForm에서 대상 Form 4를 선택하여 작업을 전송합니다.",
        "checks": [
          "프린터 선택",
          "전송 완료 확인"
        ],
        "warning": "대상 장비가 맞는지 확인하세요.",
        "substeps": []
      },
      {
        "title": "3D 프린팅 출력",
        "summary": "상태 확인 후 Print",
        "description": "장비 화면에서 준비 상태를 확인하고 작업을 선택해 Print를 누릅니다.",
        "checks": [
          "소모품 인식 및 오류 확인",
          "Print 선택",
          "출력 상태 확인"
        ],
        "warning": "오류가 표시되면 출력하지 말고 담당자에게 알리세요.",
        "substeps": []
      },
      {
        "title": "출력물 후처리 및 정리",
        "summary": "분리·세척·건조·후경화",
        "description": "출력물을 분리해 승인된 용제로 세척하고 완전히 건조한 후 레진에 맞게 후경화합니다. 작업대를 정리합니다.",
        "checks": [
          "보호구 착용·출력물 분리",
          "세척 후 완전 건조",
          "재료별 후경화",
          "폐기물 분리·정리"
        ],
        "warning": "IPA는 인화성이 있습니다. 미경화 레진과 폐용제를 배수구에 버리지 마세요.",
        "substeps": []
      }
    ],
    "safety": [
      {
        "title": "니트릴 장갑·보안경",
        "description": "액상 레진과 세척 용제를 취급할 때 적절한 보호구를 착용하세요."
      },
      {
        "title": "UV 광원 주의",
        "description": "전원이 켜진 상태에서 내부 광원을 직접 응시하지 마세요."
      },
      {
        "title": "IPA 화재 위험",
        "description": "IPA는 인화성이 높으므로 환기하고 점화원을 피하세요."
      },
      {
        "title": "레진 탱크 보호",
        "description": "탱크 필름에 금속 스크레이퍼나 날카로운 도구를 사용하지 마세요."
      },
      {
        "title": "카트리지 밸브 분리 금지",
        "description": "하단 고무 바이트 밸브를 제거하면 레진이 유출될 수 있습니다."
      },
      {
        "title": "미경화 레진 폐기",
        "description": "레진 및 오염 용제는 SDS와 실습실의 폐기 절차를 따르세요."
      }
    ],
    "troubles": [
      {
        "title": "레진에 먼지나 이물질이 보여요",
        "category": "레진",
        "brief": "미경화 레진의 오염으로 출력 실패가 생길 수 있어요.",
        "actions": [
          "출력을 시작하지 않고 니트릴 장갑과 보안경을 착용합니다.",
          "레진 탱크 내부 이물질을 눈으로 확인합니다.",
          "담당자에게 전용 청소·필터링 절차를 요청합니다."
        ],
        "staffRequired": true
      },
      {
        "title": "레진 탱크 바닥에 굳은 조각이 있어요",
        "category": "레진",
        "brief": "프린트 실패 후 경화된 레진이 남았을 수 있어요.",
        "actions": [
          "출력을 중단하고 탱크 상태를 확인합니다.",
          "담당자 지도 아래 클리닝 시트 또는 전용 플라스틱 도구를 사용합니다.",
          "금속 스크레이퍼로 탱크 필름을 긁지 않습니다."
        ],
        "staffRequired": true
      },
      {
        "title": "출력물이 플랫폼에 붙지 않아요",
        "category": "출력",
        "brief": "플랫폼·서포트·레진 탱크 상태를 확인해요.",
        "actions": [
          "빌드 플랫폼 장착과 표면 상태를 확인합니다.",
          "PreForm의 방향·서포트 설정을 확인합니다.",
          "탱크 안 잔해가 의심되면 재출력하지 않고 담당자에게 알립니다."
        ],
        "staffRequired": false
      },
      {
        "title": "프린트가 시작되지 않아요",
        "category": "출력",
        "brief": "소모품 인식이나 준비 상태 문제일 수 있어요.",
        "actions": [
          "탱크·믹서·빌드 플랫폼·카트리지 설치 표시를 확인합니다.",
          "Ready 및 오류 메시지를 확인합니다.",
          "PreForm 파일 전송 상태를 확인합니다."
        ],
        "staffRequired": false
      },
      {
        "title": "레진 공급이 안 돼요",
        "category": "레진",
        "brief": "카트리지 인식이나 통기 상태를 확인해요.",
        "actions": [
          "카트리지 장착 상태를 확인합니다.",
          "벤트 캡이 열려 있는지 확인합니다.",
          "하단 고무 바이트 밸브를 제거하거나 강제로 조작하지 않습니다."
        ],
        "staffRequired": false
      },
      {
        "title": "세척 후 출력물이 끈적거리거나 뿌옇게 돼요",
        "category": "후처리",
        "brief": "세척 용제·건조·후경화 조건이 맞지 않을 수 있어요.",
        "actions": [
          "사용 레진에 맞는 세척 절차와 용제 상태를 확인합니다.",
          "세척액이 완전히 제거되고 출력물이 건조됐는지 확인합니다.",
          "후경화 조건은 해당 레진 지침에 따라 담당자와 확인합니다."
        ],
        "staffRequired": false
      }
    ],
    "specs": [
      "제조사",
      "to",
      "Formlabs",
      "모델명",
      "to",
      "Form 4",
      "출력 방식",
      "to",
      "LFD / mSLA",
      "빌드 볼륨",
      "to",
      "200 × 125 × 210 mm",
      "사용 프로그램",
      "to",
      "PreForm",
      "파일 형식",
      "to",
      "STL / OBJ / 3MF",
      "광학 파장",
      "to",
      "405 nm",
      "장비 위치",
      "to",
      "A 창의관 실습실 203호",
      "출처",
      "to",
      "Form 4 한국어 사용 설명서(2024년 4월)"
    ],
    "location": [
      "장비 위치",
      "to",
      "A 창의관 실습실 203호"
    ],
    "parts": [],
    "image": "assets/images/sla_form4.png",
    "displaySpecs": [
      [
        "제조사",
        "Formlabs"
      ],
      [
        "모델명",
        "Form 4"
      ],
      [
        "작업 영역 (X·Y·Z)",
        "200 × 125 × 210 mm"
      ],
      [
        "사용 프로그램",
        "PreForm"
      ],
      [
        "공식 홈페이지",
        "https://formlabs.com"
      ]
    ]
  },
  {
    "id": "healthcare",
    "assetPrefix": "healthcare",
    "name": "헬스케어 장비",
    "model": "mCube Healthcare with IoT",
    "category": "헬스케어",
    "description": "생체신호 센서와 LCD를 활용하는 헬스케어 통합 실습 장비입니다.",
    "imageRes": "R.drawable.healthcare_mcube_case",
    "steps": [
      {
        "title": "센서 선택",
        "summary": "사용할 센서 준비",
        "description": "측정할 센서와 케이블, 필요한 전극·커프 등 부속품을 준비합니다.",
        "checks": [
          "센서 종류 확인",
          "부속품 준비"
        ],
        "warning": "손상된 센서나 케이블은 사용하지 마세요.",
        "substeps": []
      },
      {
        "title": "센서 연결",
        "summary": "전원 OFF에서 연결",
        "description": "전원이 꺼진 상태에서 센서 보드와 케이블을 연결합니다.",
        "checks": [
          "Sensor Board·Adapter Board 확인",
          "케이블 연결 확인"
        ],
        "warning": "ECG·EMG·EOG 직접 측정 시 보드 스위치를 BIO로 설정하세요.",
        "substeps": []
      },
      {
        "title": "장비 전원 켜기",
        "summary": "전원·화면 확인",
        "description": "DC 12V 전원 연결 상태를 확인하고 장비를 켭니다.",
        "checks": [
          "전원 연결 확인",
          "LCD 화면 확인"
        ],
        "warning": "케이블을 연결하거나 바꿀 때는 먼저 전원을 끄세요.",
        "substeps": []
      },
      {
        "title": "측정 시작",
        "summary": "센서별 착용·측정값 확인",
        "description": "사용할 센서를 선택하여 착용·연결한 뒤 해당 측정 프로그램과 LCD에서 측정값 또는 파형을 확인합니다. 아래에서 센서를 선택하세요.",
        "checks": [
          "센서별 착용 위치 확인",
          "해당 센서 프로그램 선택",
          "LCD 측정값·파형 확인"
        ],
        "warning": "전극 부착 위치는 원본 실습자료의 그림을 확인하세요. GSR·혈당 측정은 상세 실습 절차 확인 후 진행하세요.",
        "substeps": [
          {
            "title": "ECG · 심전도",
            "path": "ECG",
            "actions": [
              "피부 정리 후 전극 부착",
              "BIO 설정 및 ECG 보드 연결",
              "ECG 파형 확인"
            ]
          },
          {
            "title": "EMG · 근전도",
            "path": "EMG",
            "actions": [
              "전완근에 전극 부착",
              "BIO 설정 및 EMG 보드 연결",
              "근육 움직임에 따른 파형 확인"
            ]
          },
          {
            "title": "EOG · 안구전도",
            "path": "EOG",
            "actions": [
              "눈 주변에 전극 부착",
              "BIO 설정 및 EOG 보드 연결",
              "눈 움직임에 따른 파형 확인"
            ]
          },
          {
            "title": "GSR · 피부전도반응",
            "path": "GSR",
            "actions": [
              "리플렛에 구성품 수록",
              "세부 측정 절차는 실습자료 확인 필요"
            ]
          },
          {
            "title": "AIRFLOW · 호흡",
            "path": "AIRFLOW",
            "actions": [
              "호흡 센서 착용",
              "AIRFLOW 보드 연결",
              "호흡 파형 확인"
            ]
          },
          {
            "title": "BODY TEMP · 체온",
            "path": "BODY TEMP",
            "actions": [
              "온도 센서를 피부에 고정",
              "BODY TEMP 보드 연결",
              "온도값 확인"
            ]
          },
          {
            "title": "NIBP · 혈압",
            "path": "NIBP",
            "actions": [
              "전원 OFF에서 혈압계 연결",
              "커프 착용 후 안정",
              "혈압계로 측정하고 LCD 값 확인"
            ]
          },
          {
            "title": "SpO2 · 산소포화도",
            "path": "SpO2",
            "actions": [
              "전원 OFF에서 측정기 연결",
              "손가락 센서 착용",
              "측정 후 산소포화도 확인"
            ]
          },
          {
            "title": "GLUCOMETER · 혈당",
            "path": "GLUCOMETER",
            "actions": [
              "리플렛에 구성품 수록",
              "채혈·측정 절차는 별도 실습 지침 확인 필요"
            ]
          },
          {
            "title": "BODY POSITION · 체위",
            "path": "BODY POSITION",
            "actions": [
              "자세 센서를 몸통에 고정",
              "BODY POSITION 보드 연결",
              "자세 변화 확인"
            ]
          }
        ]
      },
      {
        "title": "종료 및 정리",
        "summary": "전원 OFF·소모품 정리",
        "description": "측정을 종료하고 전원을 끈 뒤 센서와 케이블을 분리하여 정리합니다.",
        "checks": [
          "측정 종료",
          "전원 OFF",
          "일회용 전극·솜 분리 폐기",
          "센서·케이블 보관"
        ],
        "warning": "오염된 소모품은 실습실 폐기 지침을 따르세요.",
        "substeps": []
      }
    ],
    "safety": [
      {
        "title": "전원 OFF 후 연결",
        "description": "센서 및 케이블 연결·교체는 전원을 끈 상태에서 진행하세요."
      },
      {
        "title": "전극·센서 위생",
        "description": "피부 접촉 부위를 정리하고 일회용 전극은 재사용하지 마세요."
      },
      {
        "title": "센서별 장착 위치",
        "description": "ECG·EMG·EOG 전극 위치는 원본 실습자료 그림을 따라야 합니다."
      },
      {
        "title": "혈당 측정 주의",
        "description": "채혈 실습은 승인된 절차와 감독하에만 진행하세요."
      },
      {
        "title": "실습용 측정값",
        "description": "교육용 장비의 측정값을 의료 진단 목적으로 사용하지 마세요."
      }
    ],
    "troubles": [
      {
        "title": "장비 전원이 켜지지 않아요",
        "category": "전원",
        "brief": "전원 어댑터 또는 스위치 상태를 확인해요.",
        "actions": [
          "DC 12V/3A 전원 어댑터 연결을 확인합니다.",
          "본체 전원 스위치를 확인합니다.",
          "계속 켜지지 않으면 전원부를 분해하지 않고 담당자에게 알립니다."
        ],
        "staffRequired": false
      },
      {
        "title": "센서가 인식되지 않아요",
        "category": "센서",
        "brief": "센서 보드·어댑터·케이블 연결 문제일 수 있어요.",
        "actions": [
          "전원을 끄고 센서 보드와 어댑터 보드 연결을 확인합니다.",
          "센서 케이블과 Audio Jack 체결을 확인합니다.",
          "전원을 켜고 해당 센서 메뉴를 다시 확인합니다."
        ],
        "staffRequired": false
      },
      {
        "title": "측정값이 표시되지 않아요",
        "category": "측정",
        "brief": "센서 종류와 선택한 화면이 다를 수 있어요.",
        "actions": [
          "센서가 올바른 보드에 연결됐는지 확인합니다.",
          "LCD에서 해당 센서 측정 메뉴를 선택합니다.",
          "연결 후에도 값이 없으면 담당자에게 알립니다."
        ],
        "staffRequired": false
      },
      {
        "title": "ECG·EMG·EOG 파형이 나오지 않아요",
        "category": "측정",
        "brief": "BIO 스위치·전극·연결 상태를 확인해요.",
        "actions": [
          "해당 Sensor Board 스위치가 BIO인지 확인합니다.",
          "원본 실습자료에 맞게 전극 부착 상태를 확인합니다.",
          "케이블·Audio Jack을 확인하고 파형을 다시 봅니다."
        ],
        "staffRequired": false
      },
      {
        "title": "측정 파형이 불안정해요",
        "category": "측정",
        "brief": "전극 접촉·케이블 움직임·센서 고정을 확인해요.",
        "actions": [
          "전극과 센서가 피부에 잘 붙어 있는지 확인합니다.",
          "움직임을 줄여 다시 측정합니다.",
          "이상이 계속되면 센서를 교체하거나 담당자에게 요청합니다."
        ],
        "staffRequired": false
      },
      {
        "title": "LCD 화면이 정상적으로 표시되지 않아요",
        "category": "화면",
        "brief": "전원이나 표시 장치 문제가 있을 수 있어요.",
        "actions": [
          "전원 연결과 본체 작동 표시를 확인합니다.",
          "화면에 오류·이상 표시가 있는지 기록합니다.",
          "장비를 분해하지 않고 담당자에게 점검을 요청합니다."
        ],
        "staffRequired": true
      }
    ],
    "specs": [
      "제조사",
      "to",
      "CNDI",
      "모델명",
      "to",
      "mCube Healthcare with IoT",
      "분류",
      "to",
      "헬스케어 통합 실습 장비",
      "센서",
      "to",
      "생체신호 센서 10종",
      "표시장치",
      "to",
      "7인치 LCD",
      "전원",
      "to",
      "DC 12V / 3A",
      "장비 위치",
      "to",
      "A 창의관 실습실 203호"
    ],
    "parts": [
      {
        "name": "Sensor Adapter Board",
        "location": "본체 센서 연결부",
        "function": "센서 신호 연결"
      },
      {
        "name": "DAQ Board",
        "location": "본체 내부",
        "function": "센서 데이터 수집"
      },
      {
        "name": "Gateway Board",
        "location": "본체 내부",
        "function": "데이터 연동"
      },
      {
        "name": "Simulator",
        "location": "본체 내부",
        "function": "모의 생체신호 출력"
      },
      {
        "name": "7인치 LCD",
        "location": "본체 화면",
        "function": "측정값과 파형 표시"
      },
      {
        "name": "생체신호 센서 10종",
        "location": "센서 구성",
        "function": "ECG·EMG·EOG·GSR·AIRFLOW·BODY TEMP·NIBP·SpO2·GLUCOMETER·BODY POSITION"
      },
      {
        "name": "전극·센서 케이블",
        "location": "부속품",
        "function": "센서 부착 및 연결"
      },
      {
        "name": "NIBP 커프·SpO2 센서",
        "location": "부속품",
        "function": "혈압 및 산소포화도 측정"
      },
      {
        "name": "전극 패치·알코올 솜",
        "location": "소모품",
        "function": "피부 부착 및 정리"
      },
      {
        "name": "전원 어댑터",
        "location": "기본 구성",
        "function": "DC 12V / 3A 전원 공급"
      }
    ],
    "location": [
      "장비 위치",
      "to",
      "A 창의관 실습실 203호"
    ],
    "image": "assets/images/healthcare_mcube_case.png",
    "displaySpecs": [
      [
        "제조사",
        "CNDI"
      ],
      [
        "모델명",
        "mCube Healthcare with IoT"
      ],
      [
        "공식 홈페이지",
        "제조사 공식 주소 확인 필요"
      ]
    ]
  }
];
