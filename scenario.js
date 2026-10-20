// ===== 高瀬航 × 小野寺由衣 『店じまいの合図』 シナリオデータ =====
// 全7回構成：第1回「初回お得体験プラン（意地と手首の脈測り）」

window.SCENARIO_DATA = {
  startScene: 'session1_intro',
  // 高瀬の裏カルテ（隠しメモ）データ
  secretNotes: {
    session1: {
      title: '高瀬の電子カルテ：小野寺由衣 様（初回）',
      publicNote: '【主訴】デスクワークによる首肩の重だるさ、慢性疲労。\n【所見】肩甲骨挙上・巻き肩。右股関節可動域制限。\n【希望】「鍛えに来た」とのこと、トレーニング重視。\n【次回】都度払い案内済み。下半身フォーム改善から入る。',
      secretNote: '【裏メモ（非公開）】\n「体を鍛えに来た」って最初めちゃくちゃ身構えて意地張ってて笑った。\nでもスクワット3セット目で生まれたての小鹿みたいにプルプルになって限界。\nタオル渡すついでに手首取ったら、動脈が狂ったみたいに跳ねて脈120超え。呼吸戻ってるのに心臓だけ暴走してて丸わかり。\n「久しぶりに動いたから」って必死に取り繕ってたけど、肌赤くなってたの絶対バレてないと思ってる。\n完全に支配されて身を委ねたいタイプ。深追いせず都度払いでサラッと帰したから、次は向こうからLINEしてくるはず。'
    }
  },
  scenes: {
    // ===== SESSION 1: 初回お得体験プラン =====
    session1_intro: [
      {
        bg: 'assets/bg_entrance.png',
        chara: null,
        speaker: '',
        text: '雑居ビルの3階。エレベーターを降りると、アロマと微かな消毒液の匂いが混ざった、静かで清潔なプライベートサロンの扉があった。',
        bpm: 78
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'あ、いらっしゃい。小野寺さんですね？ どうぞ、上がってください',
        bpm: 80
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'takase',
        speaker: '',
        text: 'チャコールの施術用ポロシャツを着た長身の男が、爽やかに笑ってスリッパを差し出してきた。高瀬航。右頬に浅いえくぼがあって、どこか人懐っこい雰囲気がある。',
        bpm: 82
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'yui',
        face: '02',
        speaker: '由衣',
        text: '初めまして、小野寺です。……あの、ネットの『初回お得体験プラン』を見て伺ったんですけど……',
        bpm: 84
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'yui',
        face: '04',
        speaker: '',
        text: '（同世代のキラキラした女性トレーナーの前で、小鹿みたいに息を切らして惨めになるのだけは耐えられなかった。比べられるのが嫌で、実績10年で手頃な男性トレーナーのここを選んだのに……いざ対面すると、体格差の威圧感に気圧されそうになる）',
        bpm: 86
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'takase',
        face: '笑顔',
        speaker: '高瀬',
        text: 'はい、カウンセリングと軽いトレーニング体験、あと最後に身体の状態チェックですね。大手と違って気取った場所じゃないんで、気楽にやりましょう',
        bpm: 82
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'takase',
        face: '真顔',
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
        bg: 'assets/bg_entrance.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'お、やる気満々ですね。いいですよ、じゃあまずはガッツリ下半身から動かして、代謝上げていきましょうか',
        bpm: 88,
        nextScene: 'session1_training'
      }
    ],

    session1_choice_both: [
      {
        bg: 'assets/bg_entrance.png',
        chara: 'takase',
        speaker: '高瀬',
        text: '了解です。じゃあトレーニングでどこが使えてないか炙り出してから、最後にしっかり整えましょう',
        bpm: 88,
        nextScene: 'session1_training'
      }
    ],

    session1_training: [
      {
        bg: 'assets/bg_training.png',
        chara: 'yui',
        face: '11',
        speaker: '由衣',
        text: 'くっ……！ はぁ……っ、足、もう上がらないです……！',
        bpm: 110,
        effect: 'pulse'
      },
      {
        bg: 'assets/bg_training.png',
        chara: 'takase',
        face: '楽しみ',
        speaker: '高瀬',
        text: 'はい、ラスト3回！ 骨盤立てて、息吐きながら沈む！ ……そう、フォーム崩れてないですよ',
        bpm: 115
      },
      {
        bg: 'assets/bg_training.png',
        chara: null,
        speaker: '',
        text: 'タイマーのブザーが鳴り、由衣はその場にへたり込みそうになった。膝が小鹿のように細かく震えている。',
        bpm: 120,
        effect: 'pulse'
      },
      {
        bg: 'assets/bg_training.png',
        chara: 'takase',
        face: '笑顔',
        speaker: '高瀬',
        text: 'お疲れさまでした。はい、タオルと水。……ちょっと手、貸してもらえます？',
        bpm: 115
      },
      {
        bg: 'assets/bg_training.png',
        chara: 'takase',
        face: '真顔',
        speaker: '',
        text: '冷たいペットボトルを渡されると同時に、高瀬の大きな掌が由衣の細い右手首を下から包み込んだ。親指の腹が橈骨動脈の真上にピタリと吸い付く。',
        bpm: 125,
        effect: 'pulse'
      },
      {
        bg: 'assets/bg_training.png',
        chara: 'yui',
        face: '08',
        speaker: '由衣',
        text: 'えっ……あの、高瀬さん……？',
        bpm: 130
      },
      {
        bg: 'assets/bg_training.png',
        chara: 'takase',
        face: '笑顔',
        speaker: '高瀬',
        text: '心拍見てるだけですよ。スマートウォッチより俺の手のほうが早いんで',
        bpm: 128
      },
      {
        bg: 'assets/bg_training.png',
        chara: 'takase',
        face: '色気',
        speaker: '高瀬',
        text: '……それにしても、脈全然落ちないっすね。呼吸は整ってきてるのに、胸の奥、めちゃくちゃ速く跳ねてる',
        bpm: 135,
        effect: 'pulse'
      },
      {
        bg: 'assets/bg_training.png',
        chara: 'yui',
        face: '09',
        speaker: '由衣',
        text: 'そ、それは……久しぶりに激しく動いたからで……！',
        bpm: 138
      },
      {
        bg: 'assets/bg_training.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'ふーん……そうなんですかね。ま、そういうことにしておきましょうか',
        bpm: 126
      },
      {
        bg: 'assets/bed.png',
        chara: 'takase',
        speaker: '高瀬',
        text: '今日はお得プランの特典で、10分だけ整体の体験も付いてます。奥のベッド、行きましょうか',
        bpm: 120,
        choices: [
          { text: '言われるがまま大人しくベッドに横たわる', target: 'session1_bed_obedient' },
          { text: '「今日はもう大丈夫です」と遠慮してみる', target: 'session1_bed_hesitate' }
        ]
      }
    ],

    session1_bed_obedient: [
      {
        bg: 'assets/bed.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'はい、うつ伏せで楽にしてくださいね。……肩甲骨周り、かなりガチガチだ',
        bpm: 110
      },
      {
        bg: 'assets/bed.png',
        chara: null,
        speaker: '',
        text: 'Tシャツの上から、高瀬の厚みのある温かい掌が肩から背中へと置かゎる。無駄のない的確な圧が加わるたび、痛気持ちいい快感が背筋を駆け抜ける。',
        bpm: 115,
        effect: 'pulse'
      },
      {
        bg: 'assets/bed.png',
        chara: 'takase',
        speaker: '高瀬',
        text: '息吐いて。力抜かないと奥まで届かないですよ',
        bpm: 118,
        nextScene: 'session1_wrapup'
      }
    ],

    session1_bed_hesitate: [
      {
        bg: 'assets/bed.png',
        chara: 'takase',
        speaker: '高瀬',
        text: '逘慧しなくていいのに。プランに含まれてるんだから、使わないと損ですよ？',
        bpm: 115
      },
      {
        bg: 'assets/bed.png',
        chara: 'takase',
        speaker: '',
        text: '有無を言わせずベッドへ促され、由衣は観念して横たわった。高瀬の手が首筋から肩のラインを丁寧になぞるようにほあしていく。プロの技術に、強張っていた身体がじんわりとほどけていく。',
        bpm: 112,
        nextScene: 'session1_wrapup'
      }
    ],

    session1_wrapup: [
      {
        bg: 'assets/bg_entrance.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'はい、今日の初回セッションはここまです。お疲れさまでした！',
        bpm: 85
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'うち、入会金とか月額の縛りやってないんで。都度払いで、また体がキツくなったり動かしたくなったらLINEで気軽に連絡してください',
        bpm: 82
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'yui',
        speaker: '由衣',
        text: 'あ、はい……ありがとうございます。都度払いなんですね、助かります……',
        bpm: 86
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: 'takase',
        speaker: '高瀬',
        text: 'じゃあ、お気をつけて。水分たくさん取って、湯船浸かってくださいね',
        bpm: 80
      },
      {
        bg: 'assets/bg_entrance.png',
        chara: null,
        speaker: '',
        text: 'あれだけ触れられて心臓を跳ねさせられたのに、高瀬は引き止める気配すらなく、あまりに爽やかに送り出してくれた。\n手首に残った熱い感触だけが、帰りの夜風の中でいつまでも消えなかった。',
        bpm: 88
      },
      {
        bg: 'assets/title_bg.png',
        chara: 'takase',
        speaker: '',
        text: '【Session 1 終了】\n画面右上の「📋 カルテ」または下のボタンから高瀬の裏カルテを閲覧できます。',
        bpm: 78,
        isSessionEnd: true,
        sessionKey: 'session1'
      }
    ]
  }
};
