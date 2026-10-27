/* SMART MANUAL 공통 데이터: 장비·작동방법·안전수칙을 수정하는 파일입니다.
 * UVA3-S2: 제조사 A 기본 매뉴얼의 순서를 바탕으로 작성한 교육용 초안.
 * LEGENS 1060S: RDWork8 안내와 학교 조작자료를 기반으로 한 교육용 초안.
 * 실제 조작과 인쇄 설정은 반드시 실습실 담당자의 승인을 받아 최종 확정하세요.
 */
window.MANUAL_DATA = [
  {
    id: 'uva3-s2', prefix: 'uv', name: 'UV 프린터', model: 'UVA3-S2', group: '프린팅',
    image: 'assets/images/uv_printer.png',
    subtitle: 'A3 UV 평판 프린터 · Suntech RIIN RIP',
    description: '소재에 이미지를 인쇄하는 UV 프린터의 기본 작동 순서를 짧은 영상으로 확인하세요.',
    draft: false, source: 'UVA3-S2 기본 사용자 매뉴얼(A-기본메뉴얼, 2024.12.23)',
    steps: [
      {title:'전원 켜기', detail:'장비 후면의 메인 전원을 ON으로 전환합니다. 초기화가 끝난 뒤 전면 패널의 상태를 확인합니다.', location:'장비 후면 · 메인 전원 스위치', checks:['장비 초기화가 완료되었는지 확인'], done:'전면 패널에 Ready가 표시됨', caution:'초기화 중에는 다른 조작을 하지 않습니다.', sec:3},
      {title:'헤드 상태 확인', detail:'베드 높이가 0mm인지 확인한 후 전면 패널의 Status 기능으로 노즐 테스트 결과를 확인합니다.', location:'전면 패널 · Status 버튼', checks:['베드 높이 0mm 확인','노즐 테스트 결과 확인'], done:'테스트 결과를 확인하고 이상 유무를 판단함', caution:'이상이 있다면 복구·청소를 임의로 진행하지 말고 담당자에게 알립니다.', sec:4},
      {title:'RIIN RIP 실행', detail:'PC에서 Suntech RIIN RIP을 실행하고 SysSetting의 연결 상태를 확인합니다.', location:'PC · RIIN RIP → SysSetting', checks:['프로그램이 정상 실행되었는지 확인','연결 표시가 녹색인지 확인'], done:'프로그램 실행 및 장비 연결 표시 확인', caution:'연결 오류가 있으면 담당자에게 점검을 요청합니다.', sec:4},
      {title:'출력 파일 불러오기', detail:'RIIN RIP의 Import 메뉴에서 인쇄할 이미지를 불러옵니다.', location:'RIIN RIP · Import / Import image', checks:['올바른 파일을 선택했는지 확인','이미지가 작업 영역에 표시되는지 확인'], done:'출력 이미지가 작업 영역에 나타남', caution:'크기와 회전 방향을 확인합니다.', sec:4},
      {title:'이미지·잉크 설정', detail:'Layout에서 위치와 크기를 조정하고, 필요 시 승인된 Spot·SysSetting 설정을 적용합니다.', location:'RIIN RIP · Layout / Spot / SysSetting', checks:['이미지 위치와 실제 크기 확인','담당자가 승인한 잉크 설정 확인'], done:'출력 위치·크기·잉크 구성이 작업 계획과 일치함', caution:'고급 잉크 설정은 학교의 승인된 기준을 따릅니다.', sec:5},
      {title:'소재 배치', detail:'RIP에서 설정한 위치에 맞춰 인쇄 베드에 소재를 배치합니다. 필요한 경우 승인된 고정 방법을 사용합니다.', location:'장비 · 인쇄 베드', checks:['RIP 화면과 실제 소재 위치가 일치하는지 확인','소재가 움직이지 않는지 확인'], done:'소재가 지정 위치에 안정적으로 놓임', caution:'소재가 헤드의 이동 경로와 간섭하지 않는지 살핍니다.', sec:4},
      {title:'소재 높이 설정', detail:'전면 패널의 Up/Down으로 Z축을 조정합니다. 제조사 매뉴얼은 헤드와 소재 사이의 간격을 2mm 이내로 안내하며 소재보다 헤드가 높아야 한다고 명시합니다.', location:'전면 패널 · Up/Down (Z축)', checks:['소재의 가장 높은 부분 확인','헤드와 소재의 간섭 여부 확인'], done:'헤드가 소재와 충돌하지 않으며 승인된 간격으로 조정됨', caution:'헤드 충돌은 장비 손상 위험이 큽니다. 현장 담당자 지침을 우선합니다.', sec:5},
      {title:'출력 시작', detail:'RIIN RIP의 Print를 눌러 작업을 시작하고 출력 상태를 확인합니다.', location:'RIIN RIP · Print', checks:['파일과 소재 위치 최종 확인','출력 진행 상태 확인'], done:'인쇄가 정상적으로 시작됨', caution:'움직이는 헤드에 접근하지 말고 이상 시 작업을 중단합니다.', sec:5},
      {title:'출력물 회수', detail:'작업 종료 후 헤드 스테이션이 Home으로 복귀하고 화면에 Ready가 표시되면 소재를 회수합니다.', location:'장비 · 인쇄 베드 및 LCD', checks:['인쇄 완료 확인','Home 복귀 및 Ready 표시 확인'], done:'완성품을 안전하게 회수함', caution:'기계가 움직이는 동안 소재를 꺼내지 않습니다.', sec:4},
      {title:'작업 종료', detail:'RIIN RIP을 종료하고 학교 담당자의 지침에 따라 장비 청소 및 전원 관리 절차를 마무리합니다.', location:'PC · RIIN RIP / 장비 전원(담당자 지침)', checks:['프로그램 종료 확인','전원 관리 방식에 대한 담당자 지침 확인'], done:'승인된 종료·정리 절차가 완료됨', caution:'제조사 매뉴얼에는 화이트 잉크 교반을 위한 전원 유지 예외가 있으므로 임의로 전원을 끄지 않습니다.', sec:3}
    ],
    safety: [
      {icon:'sun', title:'광원 노출 금지', detail:'인쇄 중 UV 광원을 직접 바라보거나 보호 구조를 임의로 해제하지 마세요.'},
      {icon:'hand', title:'움직이는 헤드 접촉 금지', detail:'장비가 작동하는 동안 이동하는 프린트 헤드와 베드에 손을 넣지 마세요.'},
      {icon:'ruler', title:'소재 높이 확인', detail:'출력 전 소재의 가장 높은 부분과 헤드의 간섭 여부를 확인해 충돌을 방지하세요.'}
    ],
    problems: [
      {title:'RIIN RIP이 연결되지 않아요', answer:'SysSetting의 연결 표시를 확인하고 장비와 PC의 통신 연결 상태를 담당자와 점검하세요.'},
      {title:'출력 위치가 맞지 않아요', answer:'Layout에서 원점·크기·회전 방향을 확인하고 실제 소재 배치와 비교하세요.'},
      {title:'헤드 테스트 결과가 이상해요', answer:'클리닝이나 Fill Ink를 임의로 실시하지 말고 담당자에게 노즐 테스트 결과를 보여주세요.'},
      {title:'높이 조절 중 오류가 발생했어요', answer:'조작을 중단하고 소재와 헤드의 간섭 가능성을 확인한 뒤 담당자에게 알리세요.'}
    ],
    specs: [['모델명','UVA3-S2'],['RIP 프로그램','Suntech RIIN RIP'],['주요 기능','UV 평판 인쇄'],['콘텐츠 기준','제조사 기본 사용자 매뉴얼'],['영상 상태','직접 촬영한 영상으로 교체 예정']]
  },
  {
    id:'legens-1060s', prefix:'laser', name:'레이저커팅기', model:'LEGENS 1060S', group:'가공',
    image:'assets/images/laser_cutter.png', subtitle:'레이저 가공 · RDWork8',
    description:'허용된 소재를 가공하기 위해 RDWork8과 레이저 장비의 사용 순서를 확인하세요.',
    draft: true, source:'RDWork8 안내 및 실습 자료를 바탕으로 만든 검수 전 초안',
    steps:[
      {title:'가공 재료 확인',detail:'학교에서 사용이 허용된 재료의 종류와 규격인지 확인합니다.',location:'작업대 · 가공 소재',checks:['소재 허용 여부 확인','두께와 상태 확인'],done:'가공 가능한 재료로 확인됨',caution:'PVC 등 유해가스 위험 소재를 임의로 가공하지 않습니다.',sec:3},
      {title:'작업 전 안전 점검',detail:'장비 담당자의 점검표에 따라 배기·냉각·보호 덮개 상태를 확인합니다.',location:'레이저커팅기 · 배기 및 냉각부',checks:['배기 작동 확인','냉각 상태 확인','보호 덮개 확인'],done:'담당자 기준에 따른 사전 점검 완료',caution:'배기·냉각 이상이 있으면 작업하지 않습니다.',sec:4},
      {title:'RDWork8 파일 불러오기',detail:'프로그램에서 디자인 파일을 불러오고 크기를 확인합니다.',location:'PC · RDWork8',checks:['디자인 파일 확인','가공 크기 확인'],done:'파일이 RDWork8 작업 영역에 표시됨',caution:'실제 소재 크기와 비교합니다.',sec:5},
      {title:'가공 방식 설정',detail:'가공 목적에 따라 Cut 또는 Scan을 선택하고 가공 레이어를 확인합니다.',location:'RDWork8 · 레이어 설정',checks:['Cut/Scan 선택 확인','레이어 지정 확인'],done:'가공 방식이 작업 목적과 일치함',caution:'가공 방식을 잘못 지정하면 소재가 손상될 수 있습니다.',sec:4},
      {title:'속도·출력 확인',detail:'소재 종류와 두께에 맞는 담당자 승인 속도·출력 설정을 확인합니다.',location:'RDWork8 · Speed / Min Power / Max Power',checks:['승인된 값 확인','재료·두께 일치 확인'],done:'담당자가 설정을 승인함',caution:'예시 숫자를 실제 설정값으로 임의 사용하지 않습니다.',sec:5},
      {title:'파일 전송',detail:'RDWork8의 Download를 통해 확인한 파일을 장비로 보냅니다.',location:'RDWork8 · Download',checks:['전송 완료 확인','작업명 확인'],done:'장비 파일 목록에서 해당 작업을 확인함',caution:'전송 파일과 출력 조건이 일치하는지 확인합니다.',sec:4},
      {title:'가공 위치 확인',detail:'레이저를 발사하지 않는 Frame 기능을 사용하여 작업 범위를 확인합니다.',location:'레이저커팅기 · Frame',checks:['가공 영역 확인','소재가 영역 안에 있는지 확인'],done:'작업 위치 확인 완료',caution:'레이저가 실제 발사되는 시험가공 기능과 혼동하지 않습니다.',sec:5},
      {title:'가공 시작',detail:'보호 덮개를 닫고 안전 확인 후 담당자 지침에 따라 가공을 시작합니다.',location:'레이저커팅기 · Start / Pause',checks:['덮개 상태 확인','배기·냉각 재확인','작동 중 관찰'],done:'가공 정상 시작',caution:'작동 중 덮개를 열거나 자리를 비우지 않습니다.',sec:5},
      {title:'작업 종료',detail:'가공이 완료된 뒤 열과 잔류 연기가 안전한 상태인지 확인하고 결과물을 회수합니다.',location:'레이저커팅기 · 가공 베드',checks:['완전 정지 확인','열기·연기 확인'],done:'안전하게 결과물 회수 및 작업장 정리 완료',caution:'직후 고온 소재에 주의합니다.',sec:4}
    ],
    safety:[
      {icon:'shield',title:'덮개 개방 금지',detail:'가공 중 보호 덮개를 열거나 안전장치를 우회하지 마세요.'},
      {icon:'alert',title:'화재 위험 주의',detail:'가공 중 자리를 비우지 않고 장비 상태를 관찰하세요.'},
      {icon:'wind',title:'배기·냉각 확인',detail:'배기나 냉각이 정상이 아닐 경우 가공을 시작하지 마세요.'}
    ],
    problems:[
      {title:'파일이 장비에서 보이지 않아요', answer:'RDWork8의 Download 작업과 장비 파일 목록을 확인하세요.'},
      {title:'가공 위치가 맞지 않아요',answer:'원점과 Frame 범위를 다시 확인하세요.'},
      {title:'재료가 절단되지 않아요',answer:'반복 가공 전 담당자에게 소재·설정값 점검을 요청하세요.'}
    ],
    specs:[['모델명','LEGENS 1060S'],['소프트웨어','RDWork8'],['콘텐츠 상태','검수 전 교육용 초안'],['영상 상태','직접 촬영 영상으로 교체 예정']]
  },
  {
    id:'fdm-printer',prefix:'fdm',name:'3D 프린터',model:'FDM · 모델 미확정',group:'프린팅',image:'assets/images/fdm_placeholder.png',subtitle:'필라멘트 적층 방식',description:'실제 장비 모델과 작동 순서가 확인되면 이곳에 매뉴얼이 등록됩니다.',draft:true,source:'준비 중',steps:[],safety:[],problems:[],specs:[['상태','장비 실측 및 매뉴얼 확인 예정']]
  },
  {
    id:'sla-printer',prefix:'sla',name:'SLA 프린터',model:'SLA · 모델 미확정',group:'프린팅',image:'assets/images/sla_placeholder.png',subtitle:'레진 3D 프린터',description:'실제 장비 모델과 작동 순서가 확인되면 이곳에 매뉴얼이 등록됩니다.',draft:true,source:'준비 중',steps:[],safety:[],problems:[],specs:[['상태','장비 실측 및 매뉴얼 확인 예정']]
  },
  {
    id:'healthcare',prefix:'healthcare',name:'헬스케어 장비',model:'모델 등록 예정',group:'헬스케어',image:'assets/images/healthcare_placeholder.png',subtitle:'교육용 헬스케어 장비',description:'실제 장비 모델과 매뉴얼이 확인되면 사용방법이 등록됩니다.',draft:true,source:'준비 중',steps:[],safety:[],problems:[],specs:[['상태','모델별 등록 예정']]
  }
];
