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
        text: '……それにしても、脈全然落ちないっすね。スクワットの負荷は抜けてるはずなのに、胸の奥、めちゃくちゃ速く跳ねてる',
        bpm: 135,
        effect: 'pulse'
      },
      {
        bg: 'assets/scene_1.png',
        chara: 'yui',
        speaker: '由衣',
        text: '息、上がってるから当たり前です……！ 手、離してください……っ',
        bpm: 138
      },
      {
        bg: 'assets/scene_1.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'はいはい。……でもこれ、首と背中の強張りも限界ですね。プランの特典で整体15分ついてるんで、奥のベッドで少し緩めますよ。どうします？',
        bpm: 125,
        choices: [
          { text: '「……お願いします」と悔しそうにベッドへ向かう', target: 'session1_bed' },
          { text: '「今日はもう帰ります」と意地で断る', target: 'session1_decline' }
        ]
      }
    ],

    session1_bed: [
      {
        bg: 'assets/scene_2.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'うつ伏せで力抜いてくださいね。……ほら、肩甲骨周りガッチガチ。これじゃ呼吸浅くなるのも当然です',
        bpm: 118
      },
      {
        bg: 'assets/scene_2.png',
        chara: null,
        speaker: '',
        text: 'Tシャツ越しに、高瀬の温かく力強い掌が肩甲骨のキワと背骨のラインを的確に圧迫していく。痛気持ちいい刺激が背筋を走り、思わず吐息が漏れた。',
        bpm: 115
      },
      {
        bg: 'assets/scene_2.png',
        chara: 'takase',
        speaker: '高瀬',
        text: '……はい、初回体験はここまで。お疲れさまでした！',
        bpm: 95,
        nextScene: 'session1_checkout'
      }
    ],

    session1_decline: [
      {
        bg: 'assets/scene_1.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'あはは、無理はさせませんよ。初日だし、今日はここまでにしておきましょうか',
        bpm: 100,
        nextScene: 'session1_checkout'
      }
    ],

    session1_checkout: [
      {
        bg: 'assets/takase_main.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'うちは月額とかコースの縛りやってないんで。都度払い制だから、また身体がキツくなったり動かしたくなったら、LINEで気軽に声かけてくださいね',
        bpm: 85
      },
      {
        bg: 'assets/takase_main.png',
        chara: 'takase',
        speaker: '高瀬',
        text: '小野寺さん、次回はもっと身体の力抜けるようになりますよ。……お疲れさまでした！',
        bpm: 82
      },
      {
        bg: 'assets/takase_main.png',
        chara: null,
        speaker: '',
        text: '【Session 1 終了】\nあんなに触られたのに、引き止められることもなく爽やかに帰された。\n右の手首に、まだあの人の体温が残っている。',
        bpm: 80,
        isEnd: true
      }
    ]
  },

  // ===== 高瀬のカルテ裏メモ（隠し要素） =====
  secretNotes: {
    session1: {
      title: '高瀬の電子カルテ［非公開メモ］- Session 1',
      publicSummary: '小野寺由衣様（29）/ 初回お得体験プラン\n・肩甲骨挙上、右股関節可動域に軽度の制限あり\n・「トレーニング重視」希望。次回姿勢改善アプローチ推奨',
      secretThought: '『鍛えに来た』って意地張ってて可愛い。デスクワークの凝りもあるけど、手首取った瞬間心拍130超えてて笑った。警戒心強い割に、触られたところから熱持って息乱れるタイプ。身体は完全に委ねたがってるのにプライドが邪魔してる。次回はもう少し追い込んで、整体の方に誘導してみるか。'
    }
  }
};
