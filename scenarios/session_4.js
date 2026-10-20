window.SCENARIO_SESSION4 = {
  secretNotes: {
    session4: {
      title: '高瀬の電子カルテ：小野寺由衣 様（第4回）',
      publicNote: '【主訴】疲労感の軽減。セルフケア・自主ストレッチの定着希望。\n【内容】ストレッチポールを用いた胸郭拡張、自力骨盤調整ストレッチ（口頭指導中心）。\n【所見】前回に比べ呼吸深度改善。徒手介入なしでも十分可動域維持可能。\n【次回】体幹安定性の確認。状況に応じ負荷調整。',
      secretNote: '【裏メモ（非公開）】\nサロンに入ってきた瞬間から、明らかに前回のベッドの続きを期待してる顔だった。\n服を着替える手つきも、どこか触れられるのを待ってる空気。\n……でも今日はあえて一切触らず、ストレッチポールと口頭指導だけで終わらせた。\n表向きは「自分で整える感覚を掴ませるため」。\nでも本当は、前回あんなに無防備に体重と体温を預けられて、俺自身が動揺したからだ。\n今日もし手で触れてたら、そのまま止まれない気がした。\n「今日はベッド行かないんですか？」って言いたげにポツンと取り残された由衣さんの目を見て、胸が痛むくらい惹かれてる自分に気づいてゾッとした。'
    }
  },
  scenes: {
    session4_intro: [
      {
        bg: 'assets/bg_entrance.png',
        chara: null,
        speaker: '',
        text: '前回の甘やかな温もりを肌が覚えてしまっていた。由衣はどこかそわそわとした胸のざわめきを抱えて来店した。',
        bpm: 88
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'yui',
        face: '03',
        speaker: '由衣',
        text: 'こんにちは、高瀬さん。……前回のおかげで、すごく身体が軽くなりました',
        bpm: 90
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'takase',
        face: '笑顔',
        speaker: '高瀬',
        text: 'それは良かった！ 顔色も戻って安心しましたよ。じゃあ今日はフロアでしっかりいきましょうか',
        bpm: 85
      },
      {
        bg: 'assets/bg_training.png',
        chara: 'yui',
        face: '02',
        speaker: '由衣',
        text: '（……今日は、最初から奥のベッドじゃないんだ……。あ、でも、トレーニングの後にまたほぐしてくれるのかな）',
        bpm: 92,
        nextScene: 'session4_training'
      }
    ],

    session4_training: [
      {
        bg: 'assets/bg_training.png',
        chara: 'takase',
        face: '真顔',
        speaker: '高瀬',
        text: '今日はこのストレッチポール使います。上に仰向けに乗って、両腕を大きく広げてください。……そう、肩甲骨寄せて',
        bpm: 95
      },
      {
        bg: 'assets/bg_training.png',
        chara: null,
        speaker: '',
        text: '高瀬は一歩離れた位置に立ち、腕を組んで由衣の姿勢を見つめている。いつものように手が伸びてこない。',
        bpm: 100
      },
      {
        bg: 'assets/bg_training.png',
        chara: 'yui',
        face: '07',
        speaker: '由衣',
        text: 'あの……高瀬さん、フォーム、これで合ってますか……？',
        bpm: 105
      },
      {
        bg: 'assets/bg_training.png',
        chara: 'takase',
        face: '笑顔',
        speaker: '高瀬',
        text: 'バッチリ合ってますよ。触って直す必要もないくらい綺麗です。……自分の身体の動かし方、もう覚えましたね',
        bpm: 98
      },
      {
        bg: 'assets/bg_training.png',
        chara: 'yui',
        face: '04',
        speaker: '',
        text: '（褒められているはずなのに、なぜか胸の奥が冷えていく。……手、触れてくれないんだ……）',
        bpm: 110,
        effect: 'pulse'
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'takase',
        face: '笑顔',
        speaker: '高瀬',
        text: 'はい、今日はここまで！ 自分でここまで動かせれば整体いらずですよ。お疲れさまでした！',
        bpm: 92,
        nextScene: 'session4_end'
      }
    ],

    session4_end: [
      {
        bg: 'assets/bg_entrance.png',
        chara: 'yui',
        face: '08',
        speaker: '由衣',
        text: 'あ……えっと……今日は、ベッドは……？',
        bpm: 115
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'takase',
        face: '真顔',
        speaker: '高瀬',
        text: '必要ないですよ。頼りすぎないで自分の力で整えるのも大事ですから。……ね？',
        bpm: 90
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: null,
        speaker: '',
        text: '爽やかに送り出された夜道。由衣は自意識過剰だった自分への猛烈な恥ずかしさと、肌に残る飢餓感に足が止まった。\n（私……あの人の手を待ってたの……？ お客さんなのに……？）',
        bpm: 105,
        effect: 'pulse'
      },
      {
        bg: 'assets/title_bg.png',
        chara: 'takase',
        speaker: '',
        text: '【Session 4 終了】\n画面右上の「♥ BPM（カルテ）」から高瀬の裏カルテ（第4回）を閲覧できます。',
        bpm: 78,
        isSessionEnd: true,
        sessionKey: 'session4',
        nextSessionStart: 'session5_intro'
      }
    ]
  }
};