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
        text: '雑居ビルの3階。エレベーターを降りると、アロマと微かな消毒液の匂いが混ざり合った、静かで清潔なプライベートサロンの扉があった。',
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
        text: 'ふーん……そうなんですかね。ま、そういうことにしておきますか',
        bpm: 132
      },
      {
        bg: 'assets/scene_2.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'お得プランの特典で、もし宜しければ整体体験も15分ついてますけど……どうします？ 股関節まわり、結構ガチガチですよ',
        bpm: 130,
        choices: [
          { text: '「……お願いします」とベッドへ向かう', target: 'session1_bed' },
          { text: '「今日はここまでにしておきます」と踏みとどまる', target: 'session1_skip_bed' }
        ]
      }
    ],

    session1_bed: [
      {
        bg: 'assets/scene_2.png',
        chara: 'takase',
        speaker: '',
        text: '施術用ベッドにうつ伏せになり、タオル越しに高瀬の手が腰骨から背中へと当てられる。厚みのある掌の熱が、ウェア越しでもはっきりと伝わってくる。',
        bpm: 125,
        effect: 'pulse'
      },
      {
        bg: 'assets/scene_2.png',
        chara: 'takase',
        speaker: '高瀬',
        text: '息吐いて。……力入ってると奥までほぐれないんで。全部俺に預けていいですから',
        bpm: 128
      },
      {
        bg: 'assets/scene_2.png',
        chara: 'yui',
        speaker: '由衣',
        text: 'ん……っ、ぁ……',
        bpm: 132,
        effect: 'pulse'
      },
      {
        bg: 'assets/scene_2.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'はい、今日はここまで。初回だし、揉み返し出ないように軽めにしておきました',
        bpm: 105,
        nextScene: 'session1_checkout'
      }
    ],

    session1_skip_bed: [
      {
        bg: 'assets/scene_1.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'あはは、無理は禁物ですね。じゃあ今日はストレッチでクールダウンして終わりにしましょう',
        bpm: 100,
        nextScene: 'session1_checkout'
      }
    ],

    session1_checkout: [
      {
        bg: 'assets/takase_main.png',
        chara: 'takase',
        speaker: '',
        text: '受付カウンターでお会計を済ませる。身構えていたような高額コースや月額会員の勧誘は、一切なかった。',
        bpm: 88
      },
      {
        bg: 'assets/takase_main.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'うちは月額縛りとか入会金ないんで。都度払いで、身体がキツくなったときにLINEくれたら枠取りますから',
        bpm: 85
      },
      {
        bg: 'assets/takase_main.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'もし宜しければ、またいつでもどうぞ。お疲れさまでした！',
        bpm: 80
      },
      {
        bg: 'assets/scene_1.png',
        chara: null,
        speaker: '由衣',
        text: '（……あれだけの手つきで触られたのに、こんなに爽やかに帰されるなんて……）',
        bpm: 88
      },
      {
        bg: 'assets/scene_1.png',
        chara: null,
        speaker: '',
        text: 'エレベーターに乗り込む由衣の手首には、まだ高瀬の大きな親指の感触が、熱を持ったまま残っていた。',
        bpm: 92,
        effect: 'pulse',
        nextScene: 'session1_line'
      }
    ],

    // 帰宅後のLINE
    session1_line: [
      {
        bg: 'assets/scene_1.png',
        chara: null,
        speaker: '',
        text: '【その日の夜 22:30 自宅ベッド】\nスマホが短く震え、画面にLINEの通知がポップアップした。',
        bpm: 85
      },
      {
        bg: 'assets/scene_1.png',
        chara: null,
        speaker: 'LINE通知（高瀬 航）',
        text: '『今日はお疲れさまでした！ 揉み返し来てないですか？ 水分多めに取って、湯船浸かってしっかり脚伸ばしてくださいね。またキツくなったら声かけてください』',
        bpm: 96,
        effect: 'pulse'
      },
      {
        bg: 'assets/scene_1.png',
        chara: null,
        speaker: '由衣',
        text: '（100%業務連絡なのに……どうしてこんなに心臓が跳ねるんだろう……）',
        bpm: 102
      },
      {
        bg: 'assets/scene_1.png',
        chara: null,
        speaker: '',
        text: '【Session 1：初回お得体験プラン 終了】\n右上のカルテアイコンから「高瀬の裏カルテ」を閲覧できるようになりました。\nタップするとタイトル画面に戻ります。',
        bpm: 78,
        isEnd: true
      }
    ]
  },

  // ===== 高瀬の電子カルテ（表カルテ ＆ 裏メモ） =====
  chartNotes: {
    client: '小野寺 由衣 様（29歳）',
    plan: '初回お得体験プラン（トレーニング＋整体チェック）',
    officialNote: 'デスクワークによる頸部〜肩甲帯の筋緊張、右股関節屈曲時の可動域制限。本人はトレーニングでの筋力向上を強く志望。体幹の代償動作に注意しながら段階的に負荷を上げる方針。',
    secretNote: '「鍛えに来た」って言ってめちゃくちゃ警戒して意地張ってるのが丸わかりで可愛い。\n手首掴んで脈測っただけで心拍130超え。耳まで真っ赤にして「久しぶりに動いたから」って言い訳してた。\n身体の深部は完全に委ねて支配されたがってるのに、大人のプライドが邪魔してるタイプ。\n次はわざと下半身限界まで追い込んで、自ら「整体お願いします」って頭下げさせるように持っていく。'
  }
};
