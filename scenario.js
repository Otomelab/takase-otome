// ===== 高瀬航 × 小野寺由衣 『店じまいの合図』 シナリオデータ =====
// 全7回構成：第1回「初回お得体験プラン（意地と手首の脈測り）」

window.SCENARIO_DATA = {
  startScene: 'session1_intro',
  scenes: {
    // ===== SESSION 1: 初回お得体験プラン =====
    session1_intro: [
      {
        bg: 'assets/scene_1.png',
        chara: null,
        speaker: '',
        text: '雑居ビルの3階。エレベーターを降りると、アロマと微かな消毒液の匂いが混ざった、静かで清潔なプライベートサロンの扉があった。',
        bpm: 78
      },
      {
        bg: 'assets/scene_1.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'あ、いらっしゃい。小野寺さんですね？ どうぞ、上がってください',
        bpm: 80
      },
      {
        bg: 'assets/scene_1.png',
        chara: 'takase',
        speaker: '',
        text: 'チャコールの施術用ポロシャツを着た長身の男が、爽やかに笑ってスリッパを差し出してきた。高瀬航。右頬に浅いえくぼがあって、どこか人懐っこい雰囲気がある。',
        bpm: 82
      },
      {
        bg: 'assets/scene_1.png',
        chara: 'yui',
        speaker: '由衣',
        text: '初めまして、小野寺です。……あの、ネットの『初回お得体験プラン』を見て伺ったんですけど……',
        bpm: 84
      },
      {
        bg: 'assets/scene_1.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'はい、カウンセリングと軽いトレーニング体験、あと最後に身体の状態チェックですね。気楽にやりましょう',
        bpm: 82
      },
      {
        bg: 'assets/scene_1.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'デスクワーク中心ですよね。首から肩にかけて結構凝ってるんじゃないですか？ うち、整体もセットでできますけど、今日はどうします？',
        bpm: 85,
        choices: [
          { text: '「体を鍛えに来たので、トレーニング中心で！」と意地を張る', target: 'session1_choice_train' },
          { text: '「実は肩こりもひどくて……両方見てほしいです」と素直に言う', target: 'session1_choice_both' }
        ]
      }
    ],

    session1_choice_train: [
      {
        bg: 'assets/scene_1.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'お、やる気満々ですね。いいですよ、じゃあまずはガッツリ下半身から動かして、代謝上げていきましょうか',
        bpm: 88,
        nextScene: 'session1_training'
      }
    ],

    session1_choice_both: [
      {
        bg: 'assets/scene_1.png',
        chara: 'takase',
        speaker: '高瀬',
        text: '了解です。じゃあトレーニングでどこが使えてないか炙り出してから、最後にしっかり整えましょう',
        bpm: 88,
        nextScene: 'session1_training'
      }
    ],

    session1_training: [
      {
        bg: 'assets/scene_1.png',
        chara: 'yui',
        speaker: '由衣',
        text: 'くっ……！ はぁ……っ、足、もう上がらないです……！',
        bpm: 110,
        effect: 'pulse'
      },
      {
        bg: 'assets/scene_1.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'はい、ラスト3回！ 骨盤立てて、息吐きながら沈む！ ……そう、フォーム崩れてないですよ',
        bpm: 115
      },
      {
        bg: 'assets/scene_1.png',
        chara: null,
        speaker: '',
        text: 'タイマーのブザーが鳴り、由衣はその場にへたり込みそうになった。膝が小鹿のように細かく震えている。',
        bpm: 120,
        effect: 'pulse'
      },
      {
        bg: 'assets/scene_1.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'お疲れさまでした。はい、タオルと水。……ちょっと手、貸してもらえます？',
        bpm: 115
      },
      {
        bg: 'assets/scene_1.png',
        chara: 'takase',
        speaker: '',
        text: '冷たいペットボトルを渡されると同時に、高瀬の大きな掌が由衣の細い右手首を下から包み込んだ。親指の腹が橈骨動脈の真上にピタリと吸い付く。',
        bpm: 125,
        effect: 'pulse'
      },
      {
        bg: 'assets/scene_1.png',
        chara: 'yui',
        speaker: '由衣',
        text: 'えっ……あの、高瀬さん……？',
        bpm: 130
      },
      {
        bg: 'assets/scene_1.png',
        chara: 'takase',
        speaker: '高瀬',
        text: '心拍見てるだけですよ。スマートウォッチより俺の手のほうが早いんで',
        bpm: 128
      },
      {
        bg: 'assets/scene_1.png',
        chara: 'takase',
        speaker: '高瀬',
        text: '……それにしても、脈全然落ちないっすね。呼吸は整ってきてるのに、胸の奥、めちゃくちゃ速く跳ねてる',
        bpm: 135,
        effect: 'pulse'
      },
      {
        bg: 'assets/scene_1.png',
        chara: 'yui',
        speaker: '由衣',
        text: 'そ、それは……久しぶりに激しく動いたからで……！',
        bpm: 138
      },
      {
        bg: 'assets/scene_1.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'ふーん……そうなんですかね。ま、そういうことにしておきます。……せっかくだから特典の整体、軽く肩と背中流して終わりにしましょうか',
        bpm: 125,
        nextScene: 'session1_stretch'
      }
    ],

    session1_stretch: [
      {
        bg: 'assets/scene_2.png',
        chara: 'takase',
        speaker: '',
        text: '施術台に座らされ、高瀬が背後に回る。シャツの上から肩甲骨のキワに親指が深く沈み込んだ。',
        bpm: 120
      },
      {
        bg: 'assets/scene_2.png',
        chara: 'yui',
        speaker: '由衣',
        text: 'あっ……痛っ、そこ……！',
        bpm: 128,
        effect: 'pulse'
      },
      {
        bg: 'assets/scene_2.png',
        chara: 'takase',
        speaker: '高瀬',
        text: '息吐いて。力抜かないと奥まで届かない。……ほら、肩上がってる。リラックス',
        bpm: 122
      },
      {
        bg: 'assets/scene_2.png',
        chara: 'takase',
        speaker: '',
        text: '耳元すぐ近くで囁かれる低い声。的確すぎる指先の圧に、由衣は情けなく息を漏らしながら、言われるがまま身体の力を抜いていった。',
        bpm: 118
      },
      {
        bg: 'assets/scene_2.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'はい、今日はおしまいです。……あ、うちは月額とか会員制の縛りはやってないんで。また身体がキツくなったら、都度LINEで連絡くれれば枠取りますよ',
        bpm: 95
      },
      {
        bg: 'assets/scene_2.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'もし宜しければ、無理せず自分のペースで使ってくださいね。お疲れさまでした！',
        bpm: 88
      },
      {
        bg: 'assets/takase_main.png',
        chara: null,
        speaker: '',
        text: 'あんなに近くで体温を感じて脈を測られたのに、最後はあっけないほど爽やかに送り出された。エレベーターを待つ間、由衣の右手首にはまだ高瀬の指の熱が焼き付いていた。',
        bpm: 82,
        nextScene: 'session1_line'
      }
    ],

    // ===== LINE 幕間 =====
    session1_line: [
      {
        bg: 'assets/yui_main.png',
        chara: null,
        speaker: '由衣の部屋（その夜）',
        text: 'お風呂上がりのベッドの上。スマートフォンの画面が短く震えた。見覚えのないアイコン――高瀬からのLINEだった。',
        bpm: 92,
        effect: 'pulse'
      },
      {
        bg: 'assets/yui_main.png',
        chara: null,
        speaker: '高瀬 航 [LINE]',
        text: '『今日はお疲れさまでした！ 初回なのにしっかり動けてましたよ。明日たぶん内腿と肩甲骨周りに筋肉痛来ると思うんで、水分多めに摂ってゆっくり休んでくださいね』',
        bpm: 105
      },
      {
        bg: 'assets/yui_main.png',
        chara: null,
        speaker: '高瀬 航 [LINE]',
        text: '『P.S. ……脈、次までに落ち着かせておいてくださいね（笑）』',
        bpm: 122,
        effect: 'pulse'
      },
      {
        bg: 'assets/yui_main.png',
        chara: null,
        speaker: '',
        text: '――からかわれてる。そう思いながらも、由衣の胸の奥は、昼間と同じように小さく跳ね上がっていた。',
        bpm: 110
      },
      {
        bg: 'assets/takase_main.png',
        chara: 'takase',
        speaker: '',
        text: '【Session 1: 初回お得体験プラン 終了】\n画面右上の「裏カルテ」アイコンから、高瀬の非公開メモが閲覧可能になりました。',
        bpm: 80,
        isEnd: true
      }
    ]
  },

  // ===== 高瀬の裏カルテ（隠しメモ） =====
  secretNotes: {
    session1: {
      title: 'Session 1: 初回体験カルテ',
      publicNote: '【主訴】デスクワークによる慢性的な肩こり・下半身の怠さ。\n【施術】自重スクワット、フォーム指導、肩甲骨周囲の軽擦・押圧。\n【方針】都度利用。まずは可動域改善と正しい呼吸の習得。',
      privateNote: '『体を鍛えに来た』ってめちゃくちゃ身構えてて可愛い。\n手首取って脈測ったら135まで跳ね上がって動揺が丸わかりだった。\n肩触った時の息の漏れ方、完全に身体を委ねたいタイプの反応。\n次回はわざと追い込んでバテさせてから、整体の枠を広げて落とす。'
    }
  }
};
