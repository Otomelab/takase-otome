// ===== 高瀬航 × 小野寺由衣 『店じまいの合図』 シナリオデータ =====
// 全7回構成：第1回「初回お得体験プラン（意地と手首の脈測り）」

window.SCENARIO_DATA = {
  startScene: 'session1_intro',
  scenes: {
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
        text: 'タイマーのブザーが鳴り、由衣はその場へへたり込みそうになった。膝が生まれたての小鹿のように細かく震えている。',
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
        text: 'ふーん……そうなんですかね。ま、そういうことにしておきますか',
        bpm: 130
      },
      {
        bg: 'assets/scene_1.png',
        chara: 'takase',
        speaker: '高瀬',
        text: '体験特典で整体15分ついてるんですけど、奥のベッド行きます？ 股関節も肩甲骨もバキバキだから、少し流しておいたほうが明日ラクですよ',
        bpm: 132,
        choices: [
          { text: '「……お、願いします」と素直にベッドへ向かう', target: 'session1_bed' },
          { text: '「今日はここまでにしておきます」と帰ろうとする', target: 'session1_decline' }
        ]
      }
    ],

    session1_bed: [
      {
        bg: 'assets/scene_2.png',
        chara: 'takase',
        speaker: '',
        text: '施術ベッドにうつ伏せになると、高瀬の手が薄いウェア越しに肩甲骨の内側から腰のラインへと滑った。迷いのない、完璧な職人の手つき。',
        bpm: 125,
        effect: 'pulse'
      },
      {
        bg: 'assets/scene_2.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'うわ、ここ張ってるな……。息吐いて、力抜いてくださいね。……そう、上手ですよ由衣さん',
        bpm: 128
      },
      {
        bg: 'assets/scene_2.png',
        chara: 'yui',
        speaker: '由衣',
        text: '（サラッと名前で呼ばれた……？ でも、指先の圧が的確すぎて、声が出そう……っ）',
        bpm: 132
      },
      {
        bg: 'assets/scene_2.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'はい、これで今日の初回体験は全部終了です！ お疲れさまでした！',
        bpm: 105,
        nextScene: 'session1_checkout'
      }
    ],

    session1_decline: [
      {
        bg: 'assets/scene_1.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'あはは、無理は禁物ですね。じゃあ今日はストレッチでクールダウンして終わりにしましょう',
        bpm: 110
      },
      {
        bg: 'assets/scene_1.png',
        chara: 'takase',
        speaker: '',
        text: '引き止めることもなく、サラリと身を引く高瀬。そのあっさりとした態度に、なぜか微かな寂しさを覚えてしまう。',
        bpm: 105,
        nextScene: 'session1_checkout'
      }
    ],

    session1_checkout: [
      {
        bg: 'assets/scene_1.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'お会計、初回お得プランで3,000円になりますね。……あ、うちは月額とか会員の縛りやってないんで',
        bpm: 95
      },
      {
        bg: 'assets/scene_1.png',
        chara: 'takase',
        speaker: '高瀬',
        text: '動かしたい時とか、身体が限界きた時に都度LINEで連絡くれれば枠取りますよ。もし宜しければ、またいつでもどうぞ',
        bpm: 92
      },
      {
        bg: 'assets/scene_1.png',
        chara: 'yui',
        speaker: '由衣',
        text: 'あ……はい、ありがとうございます。……ごちそうさまでした、じゃなくて、お疲れさまでした……！',
        bpm: 98
      },
      {
        bg: 'assets/scene_1.png',
        chara: null,
        speaker: '',
        text: '【Session 1 終了】\nあんなに触られたのに、最後は爽やかに送り出された。\n右手首に残る温もりが消えないまま、由衣はサロンを後にした。',
        bpm: 85,
        nextScene: 'session1_line'
      }
    ],

    // 帰宅後のLINE幕間
    session1_line: [
      {
        bg: 'assets/scene_1.png',
        chara: null,
        speaker: '',
        text: 'その日の夜、ベッドに入った由衣のスマホが震えた。\n画面には高瀬からのLINEが表示されている。',
        bpm: 90,
        effect: 'pulse'
      },
      {
        bg: 'assets/scene_1.png',
        chara: null,
        speaker: 'LINE [高瀬]',
        text: '『今日はお疲れさまでした！ 揉み返し来てないですか？ 水分多めに取って、湯船しっかり浸かってくださいね。次回は背中周りもっと伸ばせますよ』',
        bpm: 105
      },
      {
        bg: 'assets/scene_1.png',
        chara: null,
        speaker: '由衣',
        text: '（100%業務連絡なのに……手首を掴まれたときの熱い感触が蘇って、心臓が跳ねる……）',
        bpm: 110
      },
      {
        bg: 'assets/takase_main.png',
        chara: 'takase',
        speaker: '',
        text: '【Session 1 Clear】\n画面をタップするとタイトル画面に戻ります。\n※タイトル画面や右上のメーターから「高瀬の裏カルテ」が閲覧可能になりました。',
        bpm: 78,
        isEnd: true
      }
    ]
  }
};
