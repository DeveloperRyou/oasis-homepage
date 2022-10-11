const roadmap = [
	{
		title: "0% : OASIS NFT, BOT 프로토타입",
		content: "OASIS BOT NFT, BOT 프로토타입을 공개합니다. 또한 커뮤니티를 활성화합니다."
	},
	{
		title: "10% : Q&A",
		content: "커뮤니티를 통해 OASIS BOT 프로토 타입의 Q&A를 진행합니다."
	},
	{
		title: "20% : NFT 에어드랍",
		content: "OASIS BOT NFT를 3개 이상 홀딩하고 있는 홀더들 중 랜덤으로 OASIS BOT NFT를 1개 에어드랍합니다."
	},
	{
		title: "30% : OASIS 법인 설립",
		content: "OASIS BOT COMPANY의 법인을 설립합니다."
	},
	{
		title: "40% : OASIS BOT Beta 공개",
		content: "Q&A를 통해 개선된 OASIS BOT – Beta 버전을 공개합니다."
	},
	{
		title: "50% : OASIS BOT Basic 공개",
		content: "OASIS BOT - Basic을 공개 및 실용화합니다. 오픈 기념 6개월간 무료로 이용 가능하며, NFT 홀더들에게 5만 point(50만원 상당 혜택)를 제공합니다."
	},
	{
		title: "60% : 수수료 혜택",
		content: "수수료 혜택을 1개월간 향상 시킵니다. 해당 기간 동안 1개의 홀더들은 7.5%, 4개 홀더들은 5%, 10개 홀더들은 2.5%의 수수료를 적용합니다."
	},
	{
		title: "70% : NFT 에어드랍",
		content: "OASIS BOT NFT를 3개 이상 홀딩하고 있는 홀더들 중 랜덤으로 OASIS BOT NFT를 1개 에어드랍합니다."
	},
	{
		title: "80% : 유료 로직 공개",
		content: "새로운 로직으로 구성된 유료 OASIS BOT 로직을 제공합니다. 해당 BOT은 1개의 NFT 혹은 Point로 구매할 수 있습니다."
	},
	{
		title: "100% : OASIS Basic 영구제",
		content: "100% 달성 기념 OASIS BOT – Basic 무료를 영구화 합니다."
	}
];
const faq = [
	{
		className : "common",
		data : [
{id: "common-1",
title: "연동 거래소는 어떻게 되나요?",
content: "<p>현재 OASIS BOT에서 연동 가능한 거래소는 업비트 입니다. </p>\
<p>업비트 거래소의 거래량이 국내 타 거래소에 비해 활발하기 때문입니다.</p>"},
{id: "common-2",
title: "OASIS BOT은 24시간 작동하나요?",
content: "<p>OASIS BOT은 API 호출 횟수 및 거래소의 IP 제한등의 문제에 영향을 최소한으로 받기 위하여 \
사용자의 컴퓨터에서 동작하게 되어 있습니다. </p>\
<p>OASIS BOT을 실행하시고 컴퓨터를 종료하지 않으신다면 24시간 동작합니다. </p>"
},
{id: "common-3",
title: "OASIS BOT은 항상 수익이 발생하나요?",
content: "<p>OASIS BOT을 사용한다고 해서 매 거래시마다 100% 수익을 발생시킨다고 말씀드릴수는 없습니다. </p>\
<p>하지만 OASIS BOT은 장기적으로 보았을 때, 최소한의 위험으로 최대한의 수익을 발생시키고 있습니다.</p>\
<p>또한 장기 투자로 코인을 보유하시는 분들에게는 코인을 보유하시면서도 추가로 수익을 발생시킬 수 있는 이점으로 인해 \
많은 고객 분들께서 OASIS BOT의 성능에 만족하고 계십니다.</p>"},
{id: "common-4",
title: "모든 코인에 적용 가능한가요?",
content: "<p>업비트에서 선택한 거래소들에서 입/출금을 지원하는 코인이라면 모두 적용 가능하며, \
OASIS BOT에서 언제든지 선택/수정 하실 수 있습니다.</p>"},
{id: "common-5",
title: "투자금 한도는 어떻게 되나요?",
content: "<p>OASIS BOT에서는 별도의 제한은 두고 있지 않습니다.</p>"}
		]
	},
	{
		className: "user",
		data : [
{
id: "user-1",
title: "API 연동이 잘 안됩니다.", 
content: "<p>봇과 API가 연동이 안되는 경우, 다음의 경우를 확인해 보시기 바랍니다.</p>\
<p>1. API의 활성화 여부를 확인해 주세요.</p>\
<p class='ms-3'>업비트 거래소의 경우 API를 발급받은 뒤에 활성화를 진행해 주셔야 합니다.</p>\
<p class='ms-3'>홈페이지 내 설치 매뉴얼에 따라 다시 한번 확인해 주시기 바랍니다.</p>\
<p>2. 올바른 API와 Secret Key를 입력해야 합니다.</p>\
<p class='ms-3'>업비트 거래소는 API와 Secret Key에 복사기능을 제공하고 있습니다.</p>\
<p class='ms-3'>혹시 모를 오입력에 대비하여, 복사 기능으로 입력을 해보시기를 권해드립니다.</p>"
},
{id: "user-2",
title: "OASIS BOT을 실행했는데 언제 거래가 발생하나요?",
content: "<p>OASIS BOT은 24시간 시장상황을 감시하며, 정해진 로직에 의해 거래가 발생합니다.</p>\
<p>하지만 매수기준에 부합하지 않으면 시장 상황에 따라 거래가 전혀 발생하지 않을 수도 있습니다.</p>"},
{id: "user-3",
title: "봇 실행 중 매수/매도를 할 수 있나요?",
content: "<p>OASIS BOT 실행중에는 절대로 매수/매도를 직접하시면 안됩니다.</p>\
<p>로직이 동작하기 때문에 직접 매수/매도시 시장 상황에 따라 봇이 자동으로 반대되는 매도/매수를 진행할 수 있기 때문입니다.</p>\
<p>직접 매수/매도 전에는 반드시 봇을 정지 후 진행하시기 바랍니다.</p>\
</p>"},
{id: "user-4",
title: "거래소 서버가 다운되면 OASIS BOT은 동작하지 않나요?",
content: "<p>거래소 서버가 다운되면 거래소의 API 지원이 중단됩니다.</p>\
<p>이 상황에서는 OASIS BOT은 매수/매도 주문을 하지 않습니다.</p>\
</p>"},
{id: "user-5",
title: "OASIS BOT 이용에 대한 추가적인 안내는 어떻게 제공되나요?",
content: "<p>사용자에게 텔레그램이나 메일, SNS로 최대한 손실이 발생하지 않도록 안내 메시지를 보내드리고 있습니다.</p>\
<p>또한 공지사항 등의 안내는 커뮤니티를 확인해주시기 바랍니다.</p>\
</p>"},
{id: "user-6",
title: "NFT는 어떻게 구입 하나요?",
content: "<p>자사 홈페이지 내 OASIS NFT → NFT 매뉴얼 을 참고하시면 됩니다.</p>"}
		]
	},
	{
		className: "point",
		data: [
{id: "point-1",
title: "봇을 사용하기 위한 결제는 어떻게 하나요?", 
content: "<p>OASIS BOT은 OASIS Point를 충전하여 사용하실 수 있습니다.</p>\
<p>KRW 환율에 따라 1:1로 충전해 드리고 있습니다.</p>"},
{id: "point-2",
title: "최소 충전 포인트가 정해져 있나요?",
content: "<p>최소 충전 포인트에 대한 별도의 제약은 없지만, 10,000 포인트 이상 충전을 권해드립니다.</p>"},
{id: "point-3",
title: "OASIS Point가 존재하는데 거래되지 않습니다.",
content: "<p>OASIS BOT은 10,000 Point 이상일 경우에만 동작하도록 되어있습니다</p>\
10,000 Point 미만 보유하신 경우에는 충전 하신 후 사용하시기 바랍니다.</p>"}
		]
	}
];
let data = {
	roadmap: roadmap,
	faq : faq
};

export default data;