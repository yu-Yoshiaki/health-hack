import { Layout } from "app/components";
import { Seo } from "app/components/Seo";
import { Header } from "app/lp/components/Header";
import { useRouter } from "next/router";

const Section = (props: {
  title: string;
  paragraph?: string;
  list?: { title: string; list?: string[] }[];
}) => {
  return (
    <div className="flex flex-col gap-2 leading-relaxed tracking-wide">
      <h3 className="text-xl font-bold text-blue-400">{props.title}</h3>
      {props.paragraph && <p>{props.paragraph}</p>}
      {props.list && (
        <ul className="list-decimal px-5">
          {props.list.map((content) => {
            return (
              <li key={content.title}>
                {content.title}
                {content.list && (
                  <ul className="list-disc px-5">
                    {content.list.map((list, index) => {
                      return <li key={index}>{list}</li>;
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

const Body = () => {
  const projectName = process.env.NEXT_PUBLIC_PROJECT_NAME;
  return (
    <div className="m-8 flex flex-col gap-4 rounded-lg bg-white p-8 md:w-[900px]">
      <h3>
        この{projectName}
        利用規約（以下「本規約」といいます）は、
        α-release企画（以下「当社」といいます）が
        {projectName}との名称を冠し、又は、
        {projectName}
        と関連するものとして提供するすべてのサービス（以下「
        {projectName}
        」といいます）の利用に関する条件を定めるものです。お客様が
        {projectName}
        の利用を申し込んだ時点で、お客様が本規約及び当社が別途表示する
        {projectName}
        利用上の注意事項（以下これらを合わせて「本規約等」といいます）に同意したものと扱われます。本規約と当該注意事項の内容が矛盾抵触する場合は、当該注意事項の定めが優先します。
      </h3>
      <Section
        title={"利用申込・承諾・拒絶・取消・解約"}
        paragraph={`お客様が${projectName}を利用しようとする場合、個人・法人を問わず、当社が指定する方法により利用を申込む必要があります。お客様が以下のいずれかに該当すると当社が判断した場合、当社は、お客様の申込を拒絶することができます。`}
        list={[
          { title: `当社に対し、虚偽の情報を提供したとき` },
          {
            title: `当社所定の審査基準を満たさないとき（当社はかかる審査基準及び審査合格・不合格の理由を開示する義務を負いません）`,
          },
          { title: `お客様が事業者でないとき` },
          {
            title: `その他お客様による${projectName}の利用が適当でないと判断されたとき`,
          },
          {
            title: `お客様が未成年者である場合は、親権者など法定代理人の同意を得たうえで${projectName}を利用してください。`,
          },
          {
            title: `説明会への参加等${projectName}の利用方法の習得等に必要となる一切の費用はお客様の負担となります。`,
          },
        ]}
      />
      <Section
        title="本規約等の変更"
        paragraph={`当社は、お客様に不当な不利益を生じさせない場合、民法548条の4の定めに基づき、適切な予告期間を設けてお客様に公表又は通知することにより、民法の定めに従い、本規約等を変更できるものとします。その他の場合には、当社は一定の予告期間を設けて、お客様に変更内容を通知するものとし、お客様が当該予告期間経過後に{projectName}を利用した場合には、当該変更に同意したものと扱われます。お客様が当該変更に同意しないことを通知した場合、{projectName}の利用契約は将来に向かって解約されます。`}
      />
      <Section
        title="利用期間"
        list={[
          {
            title: `${projectName}の利用期間は申込日より1ヶ月間とします。お客様が当社所定の方法により利用期間の満了日の3営業日前までに解約を申し出ないか、当社が利用期間の満了日の1週間前までに解約を通知しない限り、利用期間は自動的に1か月間延長されるものとし、その後も同様とします。営業日とは、①土曜日及び日曜日、②国民の休日、③当社がお客様に当社の休日として通知した日のいずれにも該当しない日をいいます。`,
          },
          {
            title: `前項の定めに関わらず、利用開始から３ヶ月間（利用料金の無料期間が設定されている場合には無料期間の終了後から３ヶ月間）は、最低利用期間となり、お客様は前項の解約の通知を行えないものとします。`,
          },
          {
            title: `お客様は、前項の最低利用期間経過後は、利用期間中いつでも当社に通知して、利用期間を終了させることができます。ただし利用期間の残期間の長短に関わらず、利用料金の日割り精算は行われず、お客様は残期間の利用料金について支払い義務を負い、既に支払い済みの場合には、返金されません。`,
          },
        ]}
      />
      <Section
        title="利用料金"
        list={[
          {
            title: `${projectName}のプランの内容、利用料金、支払期限等（以下「利用料金等」といいます）は、当社が公表又は通知する通りとします。`,
          },
          {
            title: `当社は、お客様に公表又は通知することにより、利用料金等を変更又は追加することがあります。`,
          },
          {
            title: `お客様が利用期間中に${projectName}のプランを変更し、月額利用料金が増額となる場合には、日割り精算はされず、利用期間全期間分の差額を、追加して当社に支払うものとします。`,
          },
          {
            title: `お客様が、利用期間中に${projectName}のプランを変更し、月額利用料金が減額となる場合には、日割り精算はされず、利用期間の残期間分の差額は、お客様には返金されません。`,
          },
          {
            title: `LINE公式アカウント等${projectName}が連携する他のシステムが使用できない状態となった結果として、{projectName}を利用できない期間が生じた場合でも、{projectName}の利用料金は減額されません。`,
          },
        ]}
      />
      <Section
        title="アカウント"
        list={[
          {
            title: `当社は、お客様に${projectName}を利用するためのアカウントを付与します。`,
          },
          {
            title: `お客様は、アカウントのパスワードを不正に利用されないよう自らの責任で厳重に管理するものとします。当社は、正しいパスワードを利用して行なわれた一切の行為を、お客様本人の行為とみなすことができ、お客様はかかる行為の結果について責任を負います。`,
          },
          {
            title: `当社は、お客様が希望する場合、合理的な範囲内でお客様によるアカウントの運用を補助することがあります。この場合、当社は、補助に必要な範囲で、お客様のアカウントを利用し、操作できるものとします。`,
          },
          {
            title: `お客様が、当社の承諾を得て第三者にアカウントの運用を委託する場合、当該第三者がお客様のアカウントを操作したことにより、お客様が何らかの損害を被った場合であっても、当社は一切の責任を負いません。`,
          },
          {
            title: `お客様が法人である場合は、お客様の関連会社（お客様の持ち分の半分以上を保有するか、お客様によって半分以上の持ち分を保有されている法人をいいます。以下「関連会社」といいます）のために、自らの名義においてアカウントを申し込み、当該関連会社に当該アカウントを利用させることができます。その場合、お客様はかかる関連会社に対し、本規約の定めを遵守させ、関連会社による本規約の遵守について責任を負うものとします。当社は、かかる関連会社の行為につき、お客様の行為とみなすことができるものとします。`,
          },
          {
            title: `お客様が${projectName}の機能を利用して、${projectName}を利用するための追加アカウントを作成した場合、お客様はかかる追加アカウントを利用する者に対し、本規約の定めを遵守させ、かかる者による本規約の遵守について責任を負うものとします。当社は、かかる者の行為につき、お客様の行為とみなすことができるものとします。`,
          },
          {
            title: `お客様の${projectName}におけるすべての権利は、理由を問わず、アカウントが削除された時点で消滅します。お客様が誤ってアカウントを削除した場合であっても、アカウントの復旧はできません。`,
          },
        ]}
      />
      <Section
        title="コンテンツ"
        list={[
          {
            title: `本規約において「コンテンツ」とは、お客様が${projectName}を利用して、LINEユーザーに送信し又はLINEユーザーが閲覧可能な状態に置くあらゆる情報を意味し、お客様のアカウントのアイコン、プロフィール情報、文章、画像、動画が含まれますが、これらに限られません。`,
          },
          {
            title: `お客様は、コンテンツについて、以下の事項を表明し、保証するものとします。コンテンツが、第三者の権利（著作権、著作者人格権、特許権、商標権、意匠権、実用新案権、営業秘密、名誉権、肖像権、プライバシー権、パブリシティー権を含みますが、これらに限りません）を侵害しないことコンテンツが、公序良俗に反するおそれのある内容（過度に暴力的な内容、露骨な性的内容を含みますが、これらに限りません）、法令又は本規約に違反する内容を含まないことコンテンツにURLリンクを含める場合、お客様がアクセス状況を集計可能であることをLINEユーザーが認識できるURLに限定するか、またはLINEユーザーがそのように認識するために必要な措置を行うこと`,
          },
          {
            title: `お客様が第三者に関する情報をコンテンツに記載する場合、LINEユーザーが当該第三者本人からの情報提供であると誤解しないよう、適切な表示（例としては、情報の発信元の明示、本人ではないことの明示などがありますが、これらに限られません）をするものとします。`,
          },
          {
            title: `お客様は、${projectName}の適正な運営のため、当社がコンテンツの内容を確認する場合があることに予め同意するものとします。当社は、お客様のコンテンツに不適切な内容が含まれていると判断した場合、当該コンテンツを配信せず、又は削除することができます。`,
          },
          {
            title: `当社は、裁判所、捜査機関、その他の公的機関から、お客様のコンテンツを開示・提供するよう請求され、当社がかる請求が正当であると判断した場合、お客様の承諾を得ることなく、お客様のコンテンツを開示・提供することができるものとします。`,
          },
          {
            title: `当社は、お客様のコンテンツを、${projectName}の広告・宣伝活動に利用することがあり、お客様は予めこれに同意するものとします。`,
          },
        ]}
      />
      <Section
        title="通知義務"
        paragraph={`お客様は、お客様の商号、名称、代表者、住所その他の連絡先を変更した場合、直ちに、当社所定の方法により、かかる変更を当社に通知するものとします。かかる通知を受けた場合、当社は、お客様に対し、かかる変更を証明する資料の提出を求めることができ、お客様はこれに応じるものとします。`}
      />
      <Section
        title="お客様の責任"
        list={[
          {
            title: `お客様が${projectName}を利用したことに起因して、当社に対し、第三者からクレーム、請求又は訴訟等が提起された場合、お客様は自らの責任と費用負担によりこれに対応するものとし、当社に迷惑を及ぼさないものとします。`,
          },
          {
            title: `お客様が本規約等に違反して${projectName}を利用したことに起因して、当社が何らかの損害（弁護士費用の負担を含みます）を被った場合、お客様は、当社に対し、直ちにこの損害を賠償するものとします。`,
          },
        ]}
      />
      <Section
        title="情報の取扱い"
        list={[
          {
            title: `当社は、お客様が当社に提供したお客様の個人情報を、${projectName}に関係する当社の事務処理、お客様からの問い合わせに対する対応及び${projectName}プライバシーポリシー記載の利用目的によるお客様への連絡に使用します。`,
          },
          {
            title: `当社は、法令で定める場合を除き、お客様の同意なく、お客様の個人情報を第三者に提供しません。`,
          },
          {
            title: `お客様は、当社に対して、当社がお客様本人から収集した個人情報について、開示、訂正、追加及び削除を請求することができます。ただし、当該開示は当社が別途定める手続きによるものとし、別途手数料が必要となる場合があります。`,
          },
          {
            title: `当社は、${projectName}のサービス向上のため、お客様による${projectName}の利用状況（メッセージの種類、送信時間、送信回数等）を確認することがあり、お客様は予めこれに同意するものとします。`,
          },
        ]}
      />
      <Section
        title="委託・業務提携"
        paragraph={`当社は、${projectName}にかかる開発・運用・保守・広告宣伝等の当社の業務の全部又は一部を、お客様に事前に通知すること無く、当社のグループ会社その他の第三者に委託することがあります。この場合、当社は当該委託先と契約を締結し、お客様の情報の適切な取り扱いを義務づけます`}
      />
      <Section
        title="サービスの中断・変更・終"
        list={[
          {
            title: `当社は以下の場合、事前の予告なく、${projectName}の提供を一時中断することがあります。当社が${projectName}を一時中断した場合であっても、当社は、お客様に対し、何ら責任を負わないものとします。`,
            list: [
              `${projectName}の提供に必要な設備の保守点検等を定期的又は緊急に行う場合`,
              `${projectName}の提供に必要な設備に故障等が生じた場合`,
              `停電、火災、地震、労働争議その他不可抗力により${projectName}の提供が困難な場合`,
              `その他、${projectName}の運用上又は技術上の相当な理由がある場合`,
            ],
          },
          {
            title: `当社は、1ヶ月前までに公表又はお客様に通知することにより、${projectName}の全部又は一部を変更し又は終了することができるものとします。その場合、利用期間の残期間にかかる利用料金の返還義務を負う他は、当社は、お客様に対し、何ら責任を負わないものとします。`,
          },
        ]}
      />
      <Section
        title="無保証・免責"
        list={[
          {
            title: `当社は、${projectName}について、事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます）がないことを明示的にも黙示的にも保証しません。当社は、お客様に対して、かかる瑕疵を除去して${projectName}を提供する義務を負いません。`,
          },
          {
            title: `当社は、${projectName}に起因してお客様に生じたあらゆる損害について一切の責任を負いません。`,
          },
          {
            title: `当社が2（ひとつ上）の定めに関わらず、法令又は裁判先例に基づいて責任を負うこととなった場合であっても、当社は、間接損害・特別損害・付随的損害・信用毀損等の金銭評価が不可能な損害について一切の責任を負いません。また、かかる場合の当社による損害の賠償は、お客様から当該損害が発生した月に受領した利用料の額を上限とします。`,
          },
        ]}
      />
      <Section
        title="アカウントの利用制限"
        paragraph={`当社がアカウントを正式に発行して、お客様が${projectName}の利用を開始した後であっても、当社は、お客様が以下の事項に該当すると判断した場合、${projectName}の利用を認めず、または利用を停止する等の制限を行う場合があります。当社はかかる制限を行った場合でも、お客様に制限にかかる具体的な理由の回答義務を負わないものとします。`}
        list={[
          {
            title: `犯罪に使用されるおそれが高い商品の販売、又はサービスの提供を行っている者`,
          },
          { title: `不法行為又は犯罪行為を構成し又は助長するおそれのある者` },
          {
            title: `他人の個人情報、登録情報、利用履歴情報などの違法又は不正な売買・仲介・斡旋等を行っている者`,
          },
          {
            title: `法令又は公序良俗に反する行為を行っている若しくは行う恐れの高い者`,
          },
          { title: `下記に定める『禁止行為』を行っていると当社が判断する者` },
          {
            title: `過度な負荷により他のお客様の円滑な利用に影響を与える利用を行っていると当社が判断する者`,
          },
          {
            title: `その他当社が${projectName}のアカウント利用に不適当であると判断する者（LINEユーザーに不利益を被らせる可能性のある者、当社の信用若しくは評判に悪影響を与える可能性のある者、当社をクレームや紛争等に巻き込む可能性のある者などが含まれますが、これらに限られません）`,
          },
        ]}
      />
      <Section
        title="禁止行為"
        paragraph=""
        list={[
          {
            title: `お客様は、${projectName}の利用に際して、以下の行為を行なってはなりません。法令、裁判所の判決、決定若しくは命令、又は法令上拘束力のある行政措置に違反する行為`,
          },
          {
            title: `当社又は第三者の著作権、商標権、特許権等の知的財産権、名誉権、プライバシー権、その他法令上又は契約上の権利を侵害する行為`,
          },
          { title: `公序良俗に反し、又は反するおそれのある行為` },
          { title: `反社会的勢力に対する利益供与その他の協力行為` },
          {
            title: `当社の許可なく、アカウントを第三者に譲渡又は貸与する行為`,
          },
          {
            title: `第三者と共用する行為当社又は第三者になりすます行為（当社がお客様であると誤解させ又は誤解させる可能性のある行為を含みます）、意図的に虚偽の情報を流布させる行為又はお申込された業種の運営・維持とはなんら関係のない内容を表示若しくは配信する行為`,
          },
          {
            title: `第三者の個人情報、登録情報、利用履歴情報などを、不正に収集、開示又は提供する行為`,
          },
          {
            title: `過度に暴力的な表現、露骨な性的表現、人種、国籍、信条、性別、社会的身分、門地等による差別につながる表現、自殺、自傷行為、薬物乱用を誘引又は助長する表現、その他反社会的な内容を含み他人に不快感を与える表現を投稿又は送信する行為`,
          },
          {
            title: `性行為やわいせつな行為を目的とする行為、面識のない異性との出会いや交際を目的とする行為、他のお客様に対する嫌がらせや誹謗中傷を目的とする行為`,
          },
          {
            title: `${projectName}の利用目的として通常想定される商業的利用目的と異なる目的で${projectName}を利用する行為`,
          },
          { title: `利用者又は第三者が、不快又は迷惑と思う内容の配信` },
          {
            title: `${projectName}のサーバやネットワークシステムに支障を与える行為`,
          },
          {
            title: `プラスの運営又は他のお客様による${projectName}の利用を妨害し、これらに支障を与える行為`,
          },
          { title: `プラスの不具合を意図的に利用する行為` },
          { title: `当社に対し不当な要求をする行為` },
          {
            title: `LINE利用規約に抵触する表現・内容の配信LINE社のロゴ利用ガイドラインの規定に抵触する表現・内容の配信`,
          },
          { title: `前各号に該当する行為を援助又は助長する行為` },
          { title: `その他、当社が不適当と判断した行為` },
        ]}
      />
      <Section
        title="利用停止・解除"
        list={[
          {
            title: `当社は、お客様が以下のいずれかに該当し、又は該当するおそれがあると当社が判断した場合、何らの催告を要すること無く、お客様との間の本規約に基づく契約関係（以下「本契約」といいます）を解除して、${projectName}の提供を中止することができます。かかる解除及び提供停止に起因してお客様に何らかの損害が生じた場合であっても、当社は、お客様に対し、何ら責任を負わないものとします。`,
            list: [
              `お客様による${projectName}の利用開始後に当社が2に定める申込拒否事由があることを知った場合`,
              `お客様が号に定める禁止行為を行った場合やその他本規約に違反した場合`,
              `不正の目的をもって${projectName}を利用した場合`,
              `破産若しくは民事再生の手続きの申し立てを受け又はお客様自身がそれらの申し立てを行うなど、お客様に信用不安が発生したと当社が判断した場合`,
              `当社の責に帰すべき理由によらず、お客様と連絡が取れない場合`,
              `その他、当社が不適切と判断する行為をお客様が行った場合`,
            ],
          },
          {
            title: `お客様が${projectName}の利用料金の支払いを1ヵ月以上遅延した場合、当社はお客様に通知して、本契約を解除できるものとします。`,
          },
          {
            title: `本契約が解除された場合、当社が${projectName}の提供を中止した上で、お客様に関連して保有しているあらゆるデータを削除することができるものとします。かかる削除に起因してお客様に何らかの損害が生じた場合であっても、当社は、お客様に対し、何ら責任を負わないものとします。`,
          },
        ]}
      />
      <Section
        title="機密保持"
        paragraph="お客様は、当社の機密情報（当社の顧客、製品、サービス、事業、技術、ノウハウ、アイディア、コンセプト等に関する一切の情報であって、その開示方法にかかわらず、当社が開示の際に秘密である旨を明示したものをいいます。以下同じです）を機密として保持するものとし、法令により開示が義務付けられる場合を除き、当社の書面による承諾なく当社の機密情報を第三者に開示又は漏洩してはならないものとします。"
      />
      <Section
        title="反社会的勢力の排除"
        list={[
          {
            title: `お客様は、自己又はその代表者、役員、実質的に経営権を有する者、従業員、代理人又は媒介者（以下「関係者」といいます）が、現在、暴力団、暴力団員、暴力団準構成員、暴力団関係企業、総会屋、社会運動標ぼうゴロ、政治活動標ぼうゴロ、特殊知能暴力集団又はこれらの者と密接な関わりを有する者若しくはこれらに準じる者（以下「反社会的勢力」といいます）のいずれにも該当しないことを表明し、かつ、将来にわたっても該当しないことを確約するものとします。`,
          },
          {
            title: `お客様は、自ら又はその関係者が、直接的又は間接的に、以下の行為を行わないことを確約するものとします。`,
            list: [
              `暴力的な要求行為`,
              `法的な責任を超えた不当な要求行為`,
              `取引に関して、脅迫的な言動（自己又はその関係者が反社会的勢力である旨を伝えることを含みますが、これに限りません）をし、又は暴力を用いる行為`,
              `風説を流布し、偽計を用い又は威力を用いて当社の信用を毀損し、又は当社の業務を妨害する行為`,
              `その他前各号に準じる行為`,
            ],
          },
          {
            title: `お客様が前2項に定める表明事項又は確約事項のいずれかに違反することが判明した場合、当社は、何らの催告を要することなく本契約を解除して、${projectName}の提供を中止することができます。かかる解除に起因してお客様に何らかの損害が生じた場合であっても、当社は、お客様に対し、何ら責任を負わないものとします。`,
          },
        ]}
      />
      <Section
        title="譲渡"
        list={[
          {
            title: `お客様は、当社の書面による承諾がない限り、本契約に関する権利義務又は契約上の地位を第三者に譲渡できないものとします。`,
          },
          {
            title: `当社が${projectName}の全部又は一部を当社のグループ会社その他の第三者に譲渡する場合、当社は、お客様に公表又は通知することにより、本契約上の当社の地位を当該第三者に譲渡することができ、お客様は予めこれに同意するものとします。`,
          },
        ]}
      />
      <Section
        title="分離可能性"
        paragraph="本規約の一部が法令等により無効と判断された場合であっても、無効となった部分以外の規定は引き続き有効に存続します。また、無効部分は、有効とするために必要最小限の範囲で修正され、意図した法律的効果と経済的効果が最大限確保されるよう解釈されるものとします。"
      />
      <Section
        title="連絡方法"
        paragraph=""
        list={[
          {
            title: `${projectName}に関する当社からお客様への連絡は、当社が運営するウェブサイト内の適宜の場所への掲示、お客様が登録したメールアドレスその他、当社が適切と判断する方法により行ないます。`,
          },
          {
            title: `${projectName}に関するお客様から当社への連絡は、当社が運営するウェブサイト内の適宜の場所に設置するお問い合わせフォームの送信、当社の本店所在地に対して送付する配達記録郵便、またはその他当社が指定する方法により行うものとします。`,
          },
        ]}
      />
      <Section
        title="言語・準拠法・管轄"
        paragraph="本規約は、日本語を正文とします。当社が日本語以外の言語にて本規約を定め、日本語の本規約と翻訳との間に齟齬がある場合、日本語の本規約が優先するものとします。本規約は日本法に準拠して解釈されるものとします。${projectName}に関して当社とお客様の間に生じる一切の紛争は、東京地方裁判所を第一審の専属的合意管轄裁判所とするものとします。"
      />
      令和4年10月23日制定α-release企画
    </div>
  );
};

export const PolicyPage = () => {
  const router = useRouter();
  const { inflow } = router.query;
  return (
    <div>
      {inflow === "lp" ? (
        <div className="grid-cols-[250px,auto] md:grid">
          <div className="hidden md:block">
            <Header />
          </div>
          <Seo title="利用規約" />
          <div className="h-screen overflow-y-auto">
            <Body />
          </div>
        </div>
      ) : (
        <Layout header="利用規約">
          <Seo title="利用規約" />
          <Body />
        </Layout>
      )}
    </div>
  );
};
