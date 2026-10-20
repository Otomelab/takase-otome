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
        text: 'お、やる気満々ですね。いいですよ、じゃあまずはガッツリ下半身から動かして代謝上げていきましょうか',
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
        text: 'ふーん……そうなんですかね。ま、そういうことにしときますか',
        bpm: 130
      },
      {
        bg: 'assets/scene_2.png',
        chara: 'takase',
        speaker: '高瀬',
        text: '今日は初回プランの特典で、整体のチェックも10分ついてます。奥のベッド、どうぞ。固まったところだけ緩めましょう',
        bpm: 125,
        choices: [
          { text: '素直に促されるまま施術ベッドへ向かう', target: 'session1_massage_a' },
          { text: '「やっぱり今日はもう大丈夫です」と身構える', target: 'session1_massage_b' }
        ]
      }
    ],

    session1_massage_a: [
      {
        bg: 'assets/scene_2.png',
        chara: 'takase',
        speaker: '',
        text: '施術台にうつ伏せになり、サロン貸出のTシャツ越しに背中を預ける。高瀬の厚みのある両手が肩甲骨から腰へと触れてきた。',
        bpm: 120
      },
      {
        bg: 'assets/scene_2.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'わ、背中バキバキ。力抜いてくださいね。息吐いて……そう、深く',
        bpm: 115
      },
      {
        bg: 'assets/scene_2.png',
        chara: 'yui',
        speaker: '由衣',
        text: 'あっ……んっ……そこ、すごく響きます……',
        bpm: 122,
        effect: 'pulse',
        nextScene: 'session1_ending'
      }
    ],

    session1_massage_b: [
      {
        bg: 'assets/scene_2.png',
        chara: 'takase',
        speaker: '高瀬',
        text: '身構えなくて大丈夫ですよ。取って食ったりしないんで。……ほら、足首だけ触りますから',
        bpm: 125
      },
      {
        bg: 'assets/scene_2.png',
        chara: 'takase',
        speaker: '',
        text: 'ベッドの縁に腰掛けさせられ、足裏とアキレス腱を的確な圧で揉みほぐされる。触れられた瞬間、じんわりと温かい熱が広がっていく。',
        bpm: 118,
        effect: 'pulse',
        nextScene: 'session1_ending'
      }
    ],

    session1_ending: [
      {
        bg: 'assets/scene_1.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'はい、今日の初回セッションはここまでです！ お疲れさまでした',
        bpm: 85
      },
      {
        bg: 'assets/scene_1.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'うちは月額とか会員の縛りやってないんで。都度払い制ですから、身体キツくなったらまたLINEでいつでも連絡してくださいね',
        bpm: 82
      },
      {
        bg: 'assets/scene_1.png',
        chara: 'yui',
        speaker: '由衣',
        text: '（あんなに動揺させられたのに……最後はこんなに爽やかに帰されるんだ……）',
        bpm: 90
      },
      {
        bg: 'assets/scene_1.png',
        chara: null,
        speaker: '',
        text: '【Session 1 終了】\nサロンを出た後の夜道、手首に残る温もりがいつまでも消えなかった。\n（画面をタップするとタイトルに戻ります。裏カルテが更新されました）',
        bpm: 78,
        isEnd: true
      }
    ]
  }
};
