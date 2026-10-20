// ===== 高瀬航 × 小野寺由衣 『店じまいの合図』 シナリオデータ =====
// 全7回構成：第1回「初回お得体験プラン（意地と手首の脈測り）」＋裏カルテ機能

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
        text: 'タイマーのブザーが鳴り、由衣はその場へへたり込みそうになった。膝が小鹿のように細かく震えている。',
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
        text: 'ふーん……そうなんですかね。ま、そういうことにしておきます。……今日はお得プランの体験特典で、整体15分ついてますけど、どうします？',
        bpm: 130,
        choices: [
          { text: '「……お願いします」と小さく頭を下げる', target: 'session1_massage_yes' },
          { text: '「今日は大丈夫です」と遠慮する', target: 'session1_massage_no' }
        ]
      }
    ],

    session1_massage_yes: [
      {
        bg: 'assets/scene_2.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'じゃあベッドへどうぞ。うつ伏せで楽にしてください',
        bpm: 125
      },
      {
        bg: 'assets/scene_2.png',
        chara: null,
        speaker: '',
        text: '施術ベッドに横たわると、高瀬の手がTシャツの上から肩甲骨の内側へと置かれた。じんわりと熱が伝わってくる。職人の淀みない手つきに、全身の緊張がほどけていく。',
        bpm: 110
      },
      {
        bg: 'assets/scene_2.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'ここ、右の僧帽筋がめちゃくちゃ張ってますね。……息吐いて、力抜いて。……そう、上手です',
        bpm: 105,
        nextScene: 'session1_checkout'
      }
    ],

    session1_massage_no: [
      {
        bg: 'assets/scene_1.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'そうですか？ 無理はさせない主義なんで、全然オッケーです。じゃあ今日はストレッチで締めて終わりましょう',
        bpm: 110,
        nextScene: 'session1_checkout'
      }
    ],

    session1_checkout: [
      {
        bg: 'assets/scene_1.png',
        chara: 'takase',
        speaker: '高瀬',
        text: '今日はお疲れさまでした。初回体験、楽しめました？',
        bpm: 95
      },
      {
        bg: 'assets/scene_1.png',
        chara: 'yui',
        speaker: '由衣',
        text: 'はい……すごく効きました。……あの、料金は……',
        bpm: 92
      },
      {
        bg: 'assets/scene_1.png',
        chara: 'takase',
        speaker: '高瀬',
        text: '体験価格の3,300円だけで大丈夫です。うちは入会金も月額縛りもやってない都度払い制なんで、回数券の押し売りもしませんから安心してください',
        bpm: 88
      },
      {
        bg: 'assets/scene_1.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'もし宜しければ、また身体がキツくなったときに都度LINEで声かけてもらえれば枠取りますよ。LINE、繋いでおきますね',
        bpm: 90
      },
      {
        bg: 'assets/scene_1.png',
        chara: null,
        speaker: '',
        text: 'あの熱い手つきで脈を測られた動揺が嘘のように、高瀬は爽やかにドアを開けて見送ってくれた。……縛りのない都度払い。いつでもやめられるはずなのに、手首に残る温もりを、由衣は帰り道ずっと意識していた。',
        bpm: 85,
        nextScene: 'session1_line'
      }
    ],

    session1_line: [
      {
        bg: 'assets/scene_1.png',
        chara: null,
        speaker: 'LINE通知',
        text: '【高瀬 航】
小野寺さん、今日はお疲れさまでした！ 揉み返し来てないですか？ 水分多めに取って、湯船浸かってゆっくり休んでくださいね。
またキツくなったら気楽に連絡してください。',
        bpm: 98,
        effect: 'pulse'
      },
      {
        bg: 'assets/scene_1.png',
        chara: 'yui',
        speaker: '由衣',
        text: '（……100%業務連絡なのに、なんでこんなにドキドキしてるんだろ……）',
        bpm: 102
      },
      {
        bg: 'assets/takase_main.png',
        chara: 'takase',
        speaker: '',
        text: '【Session 1 終了】
画面をタップするとタイトル画面に戻ります。
※タイトル画面またはヘッダーの「裏カルテ」から高瀬の非公開メモが読めます。',
        bpm: 78,
        isEnd: true
      }
    ]
  },

  // ===== 高瀬の裏カルテ（隠しデータ） =====
  secretNotes: {
    session1: {
      title: '高瀬の電子カルテ（非公開メモ）',
      date: 'Session 1 / 初回お得体験プラン',
      official: '【表カルテ】右肩甲骨挙上、頸椎過伸展気味。下半身種目で乳酸蓄積早め。都度払い希望。LINE登録済。',
      secret: '【裏メモ】ネットの初回お得プラン見て来たらしい。「鍛えに来た」って意地張ってて可愛い。手首取って脈測ったら130超えで動揺丸出し。警戒心強い大人の顔してるけど、絶対身体預けて全部委ねたいタイプ。縛りなしの都度払いにしたから、次は向こうからLINEしてくるはず。次はわざと追い込んでから整体で落とす。'
    }
  }
};
