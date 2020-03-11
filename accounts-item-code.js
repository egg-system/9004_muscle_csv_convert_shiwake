// key: TKCのコード, value: Smileのコード
const codeTable =
  [
    {from: ["1113", "1"], to: ["103", "1000"]},   //TKC_勘定科目名（補助）:    三菱八王子415641
    {from: ["1113", "2"], to: ["103", "1001"]},   //TKC_勘定科目名（補助）:    三菱八王子495658助成金
    {from: ["1113", "3"], to: ["103", "1002"]},   //TKC_勘定科目名（補助）:    三菱八王子536849小口
    {from: ["1113", "4"], to: ["103", "1003"]},   //TKC_勘定科目名（補助）:    西武信金飯田橋2566
    {from: ["1113", "5"], to: ["103", "1004"]},   //TKC_勘定科目名（補助）:    多摩信金八王子四谷520203
    {from: ["1113", "6"], to: ["103", "1005"]},   //TKC_勘定科目名（補助）:    福島銀行川俣支店1049505
    {from: ["1113", "7"], to: ["103", "1006"]},   //TKC_勘定科目名（補助）:    大東銀行川俣支店
    {from: ["1113", "8"], to: ["103", "1007"]},   //TKC_勘定科目名（補助）:    あぶくま信金小高3009
    {from: ["1113", "9"], to: ["103", "1008"]},   //TKC_勘定科目名（補助）:    東邦銀行川俣支店
    {from: ["1113", "10"], to: ["103", "1009"]},   //TKC_勘定科目名（補助）:    みずほ銀行銀座通2463946
    {from: ["1113", "11"], to: ["103", "1010"]},   //TKC_勘定科目名（補助）:    ソニー銀行
    {from: ["1113", "12"], to: ["103", "1011"]},   //TKC_勘定科目名（補助）:    三菱UFJ信託銀行本店4734893
    {from: ["1113", "13"], to: ["103", "1012"]},   //TKC_勘定科目名（補助）:    三井住友銀行飯田橋支店7247621
    {from: ["1113", "14"], to: ["103", "1013"]},   //TKC_勘定科目名（補助）:    三井住友銀行飯田橋支店7251707
    {from: ["1113", "15"], to: ["103", "1014"]},   //TKC_勘定科目名（補助）:    三井住友信託本店営業部0646234
    {from: ["1113", "Z"], to: ["103", "9999"]},   //TKC_勘定科目名（補助）:
    {from: ["1152", "1"], to: ["122", "1000"]},   //TKC_勘定科目名（補助）:    東京理科大学　小林研究室
    {from: ["1152", "2"], to: ["122", "1001"]},   //TKC_勘定科目名（補助）:    勘定奉行保守OMSS
    {from: ["1152", "3"], to: ["122", "1002"]},   //TKC_勘定科目名（補助）:    南相馬営業所　菊池製作所
    {from: ["1152", "4"], to: ["122", "1003"]},   //TKC_勘定科目名（補助）:    保守メンテ業務委託　JSC
    {from: ["1152", "5"], to: ["122", "1004"]},   //TKC_勘定科目名（補助）:    従業員通勤手当
    {from: ["1152", "6"], to: ["122", "1005"]},   //TKC_勘定科目名（補助）:    リコージャパン㈱　Gメールサービ
    {from: ["1152", "7"], to: ["122", "1006"]},   //TKC_勘定科目名（補助）:    アドビシステムズ　年間ライセンス
    {from: ["1152", "8"], to: ["122", "1007"]},   //TKC_勘定科目名（補助）:    償却資産税　南相馬市
    {from: ["1152", "9"], to: ["122", "1008"]},   //TKC_勘定科目名（補助）:    ソリッドワークス保守
    {from: ["1152", "10"], to: ["122", "1009"]},   //TKC_勘定科目名（補助）:    ソリッドワークス２保守
    {from: ["1152", "11"], to: ["122", "1010"]},   //TKC_勘定科目名（補助）:    PL保険　MST保険ｻｰﾋﾞｽ㈱
    {from: ["1152", "13"], to: ["122", "1011"]},   //TKC_勘定科目名（補助）:    海外PL保険
    {from: ["1152", "14"], to: ["122", "1012"]},   //TKC_勘定科目名（補助）:    労働保険料　概算支払い
    {from: ["1152", "15"], to: ["122", "1013"]},   //TKC_勘定科目名（補助）:    償却資産税　新宿区
    {from: ["1152", "16"], to: ["122", "1014"]},   //TKC_勘定科目名（補助）:    ﾛﾎﾞｯﾄ革命ｲﾆｼｱﾃｨﾌﾞ　年会費
    {from: ["1152", "17"], to: ["122", "1015"]},   //TKC_勘定科目名（補助）:    建築研究開発コンソーシアム　年会
    {from: ["1152", "18"], to: ["122", "1016"]},   //TKC_勘定科目名（補助）:    WEBARENA　NTTPCｺﾐｭﾆｹ-
    {from: ["1152", "19"], to: ["122", "1017"]},   //TKC_勘定科目名（補助）:    理科大　意匠出願指導
    {from: ["1152", "20"], to: ["122", "1018"]},   //TKC_勘定科目名（補助）:    ﾋﾞｼﾞﾈｽ実践研究所(RobiZy)
    {from: ["1152", "21"], to: ["122", "1019"]},   //TKC_勘定科目名（補助）:    リードエグジビションジャパン
    {from: ["1152", "22"], to: ["122", "1020"]},   //TKC_勘定科目名（補助）:    第一生命保険　PL保険
    {from: ["1152", "25"], to: ["122", "1021"]},   //TKC_勘定科目名（補助）:    BearTail
    {from: ["1152", "26"], to: ["122", "1022"]},   //TKC_勘定科目名（補助）:    かながわ福祉ｻｰﾋﾞﾙ振興会
    {from: ["1152", "27"], to: ["122", "1023"]},   //TKC_勘定科目名（補助）:    ﾃｸﾉｴｲﾄﾞ協会
    {from: ["1152", "28"], to: ["122", "1024"]},   //TKC_勘定科目名（補助）:    Slack
    {from: ["1152", "29"], to: ["122", "1025"]},   //TKC_勘定科目名（補助）:    北海道ﾍﾙｽｹｱﾛﾎﾞｯﾄ協会
    {from: ["1152", "30"], to: ["122", "1026"]},   //TKC_勘定科目名（補助）:    KINTONE 年間保守
    {from: ["1152", "31"], to: ["122", "1027"]},   //TKC_勘定科目名（補助）:    福島事務所
    {from: ["1152", "32"], to: ["122", "1028"]},   //TKC_勘定科目名（補助）:    ﾀﾚﾝﾄ契約料
    {from: ["1152", "33"], to: ["122", "1029"]},   //TKC_勘定科目名（補助）:    CM製作費
    {from: ["1152", "34"], to: ["122", "1030"]},   //TKC_勘定科目名（補助）:    ﾃﾞｲﾘｽﾎﾟｰﾂ　連結ｽﾃｯｶｰ
    {from: ["1152", "35"], to: ["122", "1031"]},   //TKC_勘定科目名（補助）:    動画関係
    {from: ["1152", "36"], to: ["122", "1032"]},   //TKC_勘定科目名（補助）:    帝国データバンク
    {from: ["1152", "Z"], to: ["122", "9999"]},   //TKC_勘定科目名（補助）:    その他
    {from: ["2115", "36"], to: ["405", "1000"]},   //TKC_勘定科目名（補助）:    社会保険・労働保険料
    {from: ["2115", "75"], to: ["405", "1001"]},   //TKC_勘定科目名（補助）:    残業代
    {from: ["2115", "90"], to: ["405", "1002"]},   //TKC_勘定科目名（補助）:    会社負担　健康保険料
    {from: ["2115", "91"], to: ["405", "1003"]},   //TKC_勘定科目名（補助）:    会社負担　介護保険料
    {from: ["2115", "92"], to: ["405", "1004"]},   //TKC_勘定科目名（補助）:    会社負担　厚生年金
    {from: ["2115", "93"], to: ["405", "1005"]},   //TKC_勘定科目名（補助）:    会社負担　社会保険料
    {from: ["2115", "94"], to: ["405", "1006"]},   //TKC_勘定科目名（補助）:    確定拠出年金　従業員負担分
    {from: ["2115", "95"], to: ["405", "1007"]},   //TKC_勘定科目名（補助）:    確定拠出年金　会社負担分
    {from: ["2115", "97"], to: ["405", "1008"]},   //TKC_勘定科目名（補助）:    ﾊﾟｰﾄ
    {from: ["2115", "101"], to: ["405", "1009"]},   //TKC_勘定科目名（補助）:    償却資産税　新宿区
    {from: ["2115", "102"], to: ["405", "1010"]},   //TKC_勘定科目名（補助）:    償却資産税　南相馬市
    {from: ["2115", "999"], to: ["405", "1011"]},   //TKC_勘定科目名（補助）:    給与
    {from: ["2115", "Z"], to: ["405", "9999"]},   //TKC_勘定科目名（補助）:
    {from: ["2117", "1"], to: ["408", "1000"]},   //TKC_勘定科目名（補助）:    給与源泉預り金
    {from: ["2117", "2"], to: ["408", "1001"]},   //TKC_勘定科目名（補助）:    報酬源泉預り金
    {from: ["2117", "3"], to: ["408", "1002"]},   //TKC_勘定科目名（補助）:    住民税
    {from: ["2117", "4"], to: ["408", "1003"]},   //TKC_勘定科目名（補助）:    持株会拠出金
    {from: ["2117", "Z"], to: ["408", "9999"]},   //TKC_勘定科目名（補助）:
    {from: ["2121", "1"], to: ["410", "1000"]},   //TKC_勘定科目名（補助）:    健康保険
    {from: ["2121", "2"], to: ["410", "1001"]},   //TKC_勘定科目名（補助）:    介護保険
    {from: ["2121", "3"], to: ["410", "1002"]},   //TKC_勘定科目名（補助）:    厚生年金
    {from: ["2121", "4"], to: ["410", "1003"]},   //TKC_勘定科目名（補助）:    雇用保険
    {from: ["2121", "Z"], to: ["410", "9999"]},   //TKC_勘定科目名（補助）:
    {from: ["3611", "A"], to: ["546", "1000"]},   //TKC_勘定科目名（補助）:    第5回
    {from: ["3611", "Z"], to: ["546", "9999"]},   //TKC_勘定科目名（補助）:
    {from: ["5216", "A"], to: ["636", "1000"]},   //TKC_勘定科目名（補助）:    器具備品
    {from: ["5216", "Z"], to: ["636", "9999"]},   //TKC_勘定科目名（補助）:
    {from: ["6111", "A"], to: ["742", "1000"]},   //TKC_勘定科目名（補助）:    給与支給
    {from: ["6111", "B"], to: ["742", "1001"]},   //TKC_勘定科目名（補助）:    業務委託収入
    {from: ["6111", "Z"], to: ["742", "9999"]},   //TKC_勘定科目名（補助）:
    {from: ["6320", "A"], to: ["749", "1000"]},   //TKC_勘定科目名（補助）:    第5回
    {from: ["6320", "Z"], to: ["749", "9999"]},   //TKC_勘定科目名（補助）:
    {from: ["6115", "0"], to: ["784", "1000"]},   //TKC_勘定科目名（補助）:    その他
    {from: ["6115", "1"], to: ["784", "1001"]},   //TKC_勘定科目名（補助）:    マッスルスーツ
    {from: ["6115", "2"], to: ["784", "1002"]},   //TKC_勘定科目名（補助）:    イノフィス発送分
    {from: ["6115", "3"], to: ["784", "1003"]},   //TKC_勘定科目名（補助）:    菊池製作所発送分
    {from: ["6115", "4"], to: ["784", "1004"]},   //TKC_勘定科目名（補助）:    アマゾン
    {from: ["6115", "10"], to: ["784", "1005"]},   //TKC_勘定科目名（補助）:    その他
    {from: ["6115", "A"], to: ["784", "1006"]},   //TKC_勘定科目名（補助）:    富士ロジ
    {from: ["6115", "B"], to: ["784", "1007"]},   //TKC_勘定科目名（補助）:    リコーエレメックス
    {from: ["6115", "Z"], to: ["784", "9999"]},   //TKC_勘定科目名（補助）:
    {from: ["6113", "A"], to: ["701", "1000"]},   //TKC_勘定科目名（補助）:    広告その他
    {from: ["6113", "B"], to: ["701", "1001"]},   //TKC_勘定科目名（補助）:    広告新聞
    {from: ["6113", "C"], to: ["701", "1002"]},   //TKC_勘定科目名（補助）:    広告名刺印刷
    {from: ["6113", "D"], to: ["701", "1003"]},   //TKC_勘定科目名（補助）:    制作ターポリン
    {from: ["6113", "E"], to: ["701", "1004"]},   //TKC_勘定科目名（補助）:    制作タレント
    {from: ["6113", "F"], to: ["701", "1005"]},   //TKC_勘定科目名（補助）:    制作ブランドサイト
    {from: ["6113", "G"], to: ["701", "1006"]},   //TKC_勘定科目名（補助）:    制作製品説明動画
    {from: ["6113", "H"], to: ["701", "1007"]},   //TKC_勘定科目名（補助）:    制作製品同梱物
    {from: ["6113", "I"], to: ["701", "1008"]},   //TKC_勘定科目名（補助）:    制作その他
    {from: ["6113", "J"], to: ["701", "1009"]},   //TKC_勘定科目名（補助）:    制作ポスター
    {from: ["6113", "K"], to: ["701", "1010"]},   //TKC_勘定科目名（補助）:    Amazon費用
    {from: ["6113", "L"], to: ["701", "1011"]},   //TKC_勘定科目名（補助）:    制作ｸﾞﾗﾌｨｯｸｽ
    {from: ["6113", "M"], to: ["701", "1012"]},   //TKC_勘定科目名（補助）:    広告TV
    {from: ["6113", "N"], to: ["701", "1013"]},   //TKC_勘定科目名（補助）:    制作CM
    {from: ["6113", "O"], to: ["701", "1014"]},   //TKC_勘定科目名（補助）:    広告Web
    {from: ["6113", "P"], to: ["701", "1015"]},   //TKC_勘定科目名（補助）:    制作会社案内
    {from: ["6113", "Z"], to: ["701", "9999"]},   //TKC_勘定科目名（補助）:
    {from: ["6318", "A"], to: ["767", "1000"]},   //TKC_勘定科目名（補助）:    アマゾン
    {from: ["6318", "B"], to: ["767", "1001"]},   //TKC_勘定科目名（補助）:    富士ロジ
    {from: ["6318", "C"], to: ["767", "1002"]},   //TKC_勘定科目名（補助）:    リコーエレメックス
    {from: ["6318", "Z"], to: ["767", "9999"]},   //TKC_勘定科目名（補助）:
    {from: ["6317", "A"], to: ["703", "1000"]},   //TKC_勘定科目名（補助）:    アマゾン
    {from: ["6317", "Z"], to: ["703", "9999"]},   //TKC_勘定科目名（補助）:
    {from: ["6319", "A"], to: ["702", "1000"]},   //TKC_勘定科目名（補助）:    販促ポスター印刷
    {from: ["6319", "B"], to: ["702", "1001"]},   //TKC_勘定科目名（補助）:    販促機体カバー
    {from: ["6319", "C"], to: ["702", "1002"]},   //TKC_勘定科目名（補助）:    販促売場制作費用
    {from: ["6319", "D"], to: ["702", "1003"]},   //TKC_勘定科目名（補助）:    報奨金
    {from: ["6319", "E"], to: ["702", "1004"]},   //TKC_勘定科目名（補助）:    Amazonｸﾘｯｸ課金料
    {from: ["6319", "F"], to: ["702", "1005"]},   //TKC_勘定科目名（補助）:    店頭以外デモ費用
    {from: ["6319", "G"], to: ["702", "1006"]},   //TKC_勘定科目名（補助）:    Amazon PointsGranted
    {from: ["6319", "Z"], to: ["702", "9999"]},   //TKC_勘定科目名（補助）:
    {from: ["6223", "0"], to: ["771", "1000"]},   //TKC_勘定科目名（補助）:    その他
    {from: ["6223", "1"], to: ["771", "1001"]},   //TKC_勘定科目名（補助）:    飲食代
    {from: ["6223", "3"], to: ["771", "1002"]},   //TKC_勘定科目名（補助）:    贈答
    {from: ["6223", "Z"], to: ["771", "9999"]},   //TKC_勘定科目名（補助）:
    {from: ["6112", "0"], to: ["761", "1000"]},   //TKC_勘定科目名（補助）:    その他
    {from: ["6112", "2"], to: ["761", "1001"]},   //TKC_勘定科目名（補助）:    出張旅費交通費
    {from: ["6112", "4"], to: ["761", "1002"]},   //TKC_勘定科目名（補助）:    宿泊費
    {from: ["6112", "5"], to: ["761", "1003"]},   //TKC_勘定科目名（補助）:    ガソリン代
    {from: ["6112", "6"], to: ["761", "1004"]},   //TKC_勘定科目名（補助）:    駐車料金
    {from: ["6112", "7"], to: ["761", "1005"]},   //TKC_勘定科目名（補助）:    タクシー代
    {from: ["6112", "9"], to: ["761", "1006"]},   //TKC_勘定科目名（補助）:    営業交通費
    {from: ["6112", "10"], to: ["761", "1007"]},   //TKC_勘定科目名（補助）:    出張旅費手当
    {from: ["6112", "12"], to: ["761", "1008"]},   //TKC_勘定科目名（補助）:    レンタカー代
    {from: ["6112", "100"], to: ["761", "1009"]},   //TKC_勘定科目名（補助）:    福島補助金対象
    {from: ["6112", "Z"], to: ["761", "9999"]},   //TKC_勘定科目名（補助）:
    {from: ["6218", "1"], to: ["762", "1000"]},   //TKC_勘定科目名（補助）:    切手等郵送費
    {from: ["6218", "2"], to: ["762", "1001"]},   //TKC_勘定科目名（補助）:    電話
    {from: ["6218", "3"], to: ["762", "1002"]},   //TKC_勘定科目名（補助）:    NTT WebARENA
    {from: ["6218", "Z"], to: ["762", "9999"]},   //TKC_勘定科目名（補助）:
    {from: ["6225", "0"], to: ["773", "1000"]},   //TKC_勘定科目名（補助）:    その他
    {from: ["6225", "1"], to: ["773", "1001"]},   //TKC_勘定科目名（補助）:    一括償却資産
    {from: ["6225", "10"], to: ["773", "1002"]},   //TKC_勘定科目名（補助）:    その他
    {from: ["6225", "100"], to: ["773", "1003"]},   //TKC_勘定科目名（補助）:    福島補助金対象
    {from: ["6225", "Z"], to: ["773", "9999"]},   //TKC_勘定科目名（補助）:
    {from: ["6216", "0"], to: ["776", "1000"]},   //TKC_勘定科目名（補助）:    その他
    {from: ["6216", "1"], to: ["776", "1001"]},   //TKC_勘定科目名（補助）:    ｼﾞｪｲｴｽｷｭ-ﾌﾞSA保守 材料費
    {from: ["6216", "2"], to: ["776", "1002"]},   //TKC_勘定科目名（補助）:    MS イノフィス保有機
    {from: ["6216", "4"], to: ["776", "1003"]},   //TKC_勘定科目名（補助）:    菊池製作所　貸出機修繕費用
    {from: ["6216", "Z"], to: ["776", "9999"]},   //TKC_勘定科目名（補助）:
    {from: ["6215", "1"], to: ["766", "1000"]},   //TKC_勘定科目名（補助）:    森戸記念館3階
    {from: ["6215", "2"], to: ["766", "1001"]},   //TKC_勘定科目名（補助）:    神楽坂駐車場
    {from: ["6215", "3"], to: ["766", "1002"]},   //TKC_勘定科目名（補助）:    菊池製作所　南相馬支店
    {from: ["6215", "4"], to: ["766", "1003"]},   //TKC_勘定科目名（補助）:    福島事務所
    {from: ["6215", "5"], to: ["766", "1004"]},   //TKC_勘定科目名（補助）:    福島事務所(社宅)
    {from: ["6215", "Z"], to: ["766", "9999"]},   //TKC_勘定科目名（補助）:
    {from: ["6116", "0"], to: ["770", "1000"]},   //TKC_勘定科目名（補助）:    その他
    {from: ["6116", "1"], to: ["770", "1001"]},   //TKC_勘定科目名（補助）:    菊池製作所
    {from: ["6116", "2"], to: ["770", "1002"]},   //TKC_勘定科目名（補助）:    グッドデザイン賞
    {from: ["6116", "A"], to: ["770", "1003"]},   //TKC_勘定科目名（補助）:    FB利用料
    {from: ["6116", "B"], to: ["770", "1004"]},   //TKC_勘定科目名（補助）:    リスクモンスター利用料
    {from: ["6116", "C"], to: ["770", "1005"]},   //TKC_勘定科目名（補助）:    海外送金手数料
    {from: ["6116", "D"], to: ["770", "1006"]},   //TKC_勘定科目名（補助）:    銀行残高証明書
    {from: ["6116", "E"], to: ["770", "1007"]},   //TKC_勘定科目名（補助）:    振込手数料
    {from: ["6116", "F"], to: ["770", "1008"]},   //TKC_勘定科目名（補助）:    日経テレコン利用料
    {from: ["6116", "G"], to: ["770", "1009"]},   //TKC_勘定科目名（補助）:    住民税納付利用料
    {from: ["6116", "H"], to: ["770", "1010"]},   //TKC_勘定科目名（補助）:    開示関連利用料
    {from: ["6116", "I"], to: ["770", "1011"]},   //TKC_勘定科目名（補助）:    クリッピング利用料
    {from: ["6116", "J"], to: ["770", "1012"]},   //TKC_勘定科目名（補助）:    上場関連利用料
    {from: ["6116", "K"], to: ["770", "1013"]},   //TKC_勘定科目名（補助）:    顧客管理費用
    {from: ["6116", "L"], to: ["770", "1014"]},   //TKC_勘定科目名（補助）:    販売管理システム利用料
    {from: ["6116", "M"], to: ["770", "1015"]},   //TKC_勘定科目名（補助）:    PC視聴ｻｰﾋﾞｽ
    {from: ["6116", "Z"], to: ["770", "9999"]},   //TKC_勘定科目名（補助）:
    {from: ["6221", "2"], to: ["781", "1000"]},   //TKC_勘定科目名（補助）:    償却資産税
    {from: ["6221", "3"], to: ["781", "1001"]},   //TKC_勘定科目名（補助）:    外形標準課税
    {from: ["6221", "4"], to: ["781", "1002"]},   //TKC_勘定科目名（補助）:    印紙
    {from: ["6221", "5"], to: ["781", "1003"]},   //TKC_勘定科目名（補助）:    行政手数料
    {from: ["6221", "Z"], to: ["781", "9999"]},   //TKC_勘定科目名（補助）:
    {from: ["6118", "1"], to: ["704", "1000"]},   //TKC_勘定科目名（補助）:    福島補助金
    {from: ["6118", "Z"], to: ["704", "9999"]},   //TKC_勘定科目名（補助）:
    {from: ["6214", "A"], to: ["782", "1000"]},   //TKC_勘定科目名（補助）:    建物付属設備
    {from: ["6214", "B"], to: ["782", "1001"]},   //TKC_勘定科目名（補助）:    資産除去債務
    {from: ["6214", "C"], to: ["782", "1002"]},   //TKC_勘定科目名（補助）:    器具備品
    {from: ["6214", "D"], to: ["782", "1003"]},   //TKC_勘定科目名（補助）:    ソフトウェア
    {from: ["6214", "Z"], to: ["782", "9999"]},   //TKC_勘定科目名（補助）:
    {from: ["6117", "0"], to: ["765", "1000"]},   //TKC_勘定科目名（補助）:    その他
    {from: ["6117", "2"], to: ["765", "1001"]},   //TKC_勘定科目名（補助）:    あずさ監査法人
    {from: ["6117", "3"], to: ["765", "1002"]},   //TKC_勘定科目名（補助）:    勘定奉行保守OMSS
    {from: ["6117", "5"], to: ["765", "1003"]},   //TKC_勘定科目名（補助）:    ジェイエスキューブSA保守契約
    {from: ["6117", "6"], to: ["765", "1004"]},   //TKC_勘定科目名（補助）:    アドビシステムズ
    {from: ["6117", "7"], to: ["765", "1005"]},   //TKC_勘定科目名（補助）:    ソリッドワークス保守
    {from: ["6117", "8"], to: ["765", "1006"]},   //TKC_勘定科目名（補助）:    菊池製作所　貸出業務委託
    {from: ["6117", "9"], to: ["765", "1007"]},   //TKC_勘定科目名（補助）:    ﾘｺｰKINTONE 保守
    {from: ["6117", "100"], to: ["765", "1008"]},   //TKC_勘定科目名（補助）:    福島補助金対象
    {from: ["6117", "101"], to: ["765", "1009"]},   //TKC_勘定科目名（補助）:    エンビジョン㈱
    {from: ["6117", "104"], to: ["765", "1010"]},   //TKC_勘定科目名（補助）:    ㈱アクロスザシー
    {from: ["6117", "105"], to: ["765", "1011"]},   //TKC_勘定科目名（補助）:    理科大　意匠出願指導
    {from: ["6117", "A"], to: ["765", "1012"]},   //TKC_勘定科目名（補助）:    ヘルプデスク関連費用
    {from: ["6117", "B"], to: ["765", "1013"]},   //TKC_勘定科目名（補助）:    レンタル関連費用
    {from: ["6117", "C"], to: ["765", "1014"]},   //TKC_勘定科目名（補助）:    営業支援関連
    {from: ["6117", "D"], to: ["765", "1015"]},   //TKC_勘定科目名（補助）:    製品デザイン費用
    {from: ["6117", "E"], to: ["765", "1016"]},   //TKC_勘定科目名（補助）:    システム導入等
    {from: ["6117", "Z"], to: ["765", "9999"]},   //TKC_勘定科目名（補助）:    その他
    {from: ["6229", "0"], to: ["763", "1000"]},   //TKC_勘定科目名（補助）:    その他
    {from: ["6229", "1"], to: ["763", "1001"]},   //TKC_勘定科目名（補助）:    小林研究室
    {from: ["6229", "2"], to: ["763", "1002"]},   //TKC_勘定科目名（補助）:    菊池製作所
    {from: ["6229", "3"], to: ["763", "1003"]},   //TKC_勘定科目名（補助）:    減価償却費
    {from: ["6229", "100"], to: ["763", "1004"]},   //TKC_勘定科目名（補助）:    福島復興補助金
    {from: ["6229", "101"], to: ["763", "1005"]},   //TKC_勘定科目名（補助）:    福島補助金（菊池製作所）
    {from: ["6229", "Z"], to: ["763", "9999"]},   //TKC_勘定科目名（補助）:  その他
    {from: ["6234", "1"], to: ["779", "1000"]},   //TKC_勘定科目名（補助）:    PCリース料
    {from: ["6234", "2"], to: ["779", "1001"]},   //TKC_勘定科目名（補助）:    コピー機リース料
    {from: ["6234", "3"], to: ["779", "1002"]},   //TKC_勘定科目名（補助）:    社有車　リース料
    {from: ["6234", "Z"], to: ["779", "9999"]},   //TKC_勘定科目名（補助）:  その他
    {from: ["6227", "1"], to: ["764", "1000"]},   //TKC_勘定科目名（補助）:    東京理科大学
    {from: ["6227", "14"], to: ["764", "1001"]},   //TKC_勘定科目名（補助）:    原田　寿政
    {from: ["6227", "15"], to: ["764", "1002"]},   //TKC_勘定科目名（補助）:    宇野・御苑会計社
    {from: ["6227", "21"], to: ["764", "1003"]},   //TKC_勘定科目名（補助）:    シティユーワ法律事務所
    {from: ["6227", "22"], to: ["764", "1004"]},   //TKC_勘定科目名（補助）:    エンビジョン㈱
    {from: ["6227", "29"], to: ["764", "1005"]},   //TKC_勘定科目名（補助）:    太陽国際特許事務所
    {from: ["6227", "34"], to: ["764", "1006"]},   //TKC_勘定科目名（補助）:    長澤労法管理事務所
    {from: ["6227", "87"], to: ["764", "1007"]},   //TKC_勘定科目名（補助）:    あずさ監査法人
    {from: ["6227", "102"], to: ["764", "1008"]},   //TKC_勘定科目名（補助）:    森田司法書士事務所
    {from: ["6227", "104"], to: ["764", "1009"]},   //TKC_勘定科目名（補助）:    赤坂監査法人
    {from: ["6227", "164"], to: ["764", "1010"]},   //TKC_勘定科目名（補助）:    響きパートナーズ
    {from: ["6227", "228"], to: ["764", "1011"]},   //TKC_勘定科目名（補助）:    税理士法人無十
    {from: ["6227", "A"], to: ["764", "1012"]},   //TKC_勘定科目名（補助）:    株主総会関連費用
    {from: ["6227", "B"], to: ["764", "1013"]},   //TKC_勘定科目名（補助）:    監査証明業務
    {from: ["6227", "C"], to: ["764", "1014"]},   //TKC_勘定科目名（補助）:    採用関連費用
    {from: ["6227", "D"], to: ["764", "1015"]},   //TKC_勘定科目名（補助）:    上場関連費用
    {from: ["6227", "E"], to: ["764", "1016"]},   //TKC_勘定科目名（補助）:    税務関連費用
    {from: ["6227", "F"], to: ["764", "1017"]},   //TKC_勘定科目名（補助）:    登記関連費用
    {from: ["6227", "G"], to: ["764", "1018"]},   //TKC_勘定科目名（補助）:    特許関連費用
    {from: ["6227", "H"], to: ["764", "1019"]},   //TKC_勘定科目名（補助）:    特許利用関連費用
    {from: ["6227", "I"], to: ["764", "1020"]},   //TKC_勘定科目名（補助）:    非監査証明業務
    {from: ["6227", "J"], to: ["764", "1021"]},   //TKC_勘定科目名（補助）:    法律相談関連費用
    {from: ["6227", "K"], to: ["764", "1022"]},   //TKC_勘定科目名（補助）:    労務関連費用
    {from: ["6227", "L"], to: ["764", "1023"]},   //TKC_勘定科目名（補助）:    製品デザイン費用
    {from: ["6227", "M"], to: ["764", "1024"]},   //TKC_勘定科目名（補助）:    製品品質テスト関連費用
    {from: ["6227", "Z"], to: ["764", "9999"]},   //TKC_勘定科目名（補助）:  その他
    {from: ["7115", "A"], to: ["806", "1000"]},   //TKC_勘定科目名（補助）:    決済
    {from: ["7115", "B"], to: ["806", "1001"]},   //TKC_勘定科目名（補助）:    評価替
    {from: ["7115", "Z"], to: ["806", "9999"]},   //TKC_勘定科目名（補助）:   その他
    {from: ["7516", "A"], to: ["851", "1000"]},   //TKC_勘定科目名（補助）:    決済
    {from: ["7516", "B"], to: ["851", "1001"]},   //TKC_勘定科目名（補助）:    評価替
    {from: ["7516", "Z"], to: ["851", "9999"]},   //TKC_勘定科目名（補助）:  その他
    {from: ["5455", "A"], to: ["683", "1000"]},   //TKC_勘定科目名（補助）:    器具備品
    {from: ["5455", "Z"], to: ["683", "9999"]},   //TKC_勘定科目名（補助）:  その他
    {from: ["5456", "A"], to: ["684", "1000"]},   //TKC_勘定科目名（補助）:    保守部品償却費
    {from: ["5456", "Z"], to: ["684", "9999"]},   //TKC_勘定科目名（補助）:
  ]

const errroCodes = []

const getSmileAccountItemCode = (value) => {
  let fromCode = value[0]
  let fromSubCode = value[1]
  if (fromCode === '' || fromSubCode === '') {
    return undefined
  }
  let row = codeTable.find(row => row.from[0] === fromCode && row.from[1] === fromSubCode)
  if (!row) {
    return undefined
  }
  return row.to[1]
}


module.exports = {
  getSmileAccountItemCode
}
