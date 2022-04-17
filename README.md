# 1. **環境構築**

```
git clone https://ko50/populatrans
cd populatrans
```

## 1.1. **パッケージを入れる**

パッケージ管理には `pnpm` を使用しています
( [pnpm をインストール](https://pnpm.io/installation) )

```
pnpm install
```

## 1.2. **環境変数を設定する**

1. `.env.sample` をコピーして、 `.env` にリネームする
1. サンプルと ↓ を参考に環境変数を設定する

### 環境変数

- **`API_CONFIG`: `"mock" | "resas"`**
  - 使用する API を選択する
- **`RESAS_API_KEY`: `string`**
  - RESAS API を使用する際の API キー

## 1.3. **サーバー起動**

```
pnpm dev
```

# 2. **開発スタイル**

## 2.1. **Git の使用**

- コミット
  - コミットメッセージは `prefix: detail` の形式
    - `prefix` は `feat` や `fix` など
    - `detail` は簡単な説明
- ブランチ
  - ブランチ名は `prefix/category/detail` の形式
    - `prefix` は `feat` や `fix` 、 `ci` など
    - `category` は `components` や `pages` など変更の大きな分類
    - `detail` は簡単な説明
  - 基本的に kebab-case (ハイフンで区切る) を使用

## 2.2 **GitHub の使用**

- 使用の流れ

  1. issue を作成する (Assignee、ラベルは最低限設定する)
  1. ブランチを切る
  1. Pull Request を作成する (設定内容は Assignee とラベルのみでよい)
  1. issue と紐付ける
  1. CI・レビューが通り次第 PR の作成者がマージする
  1. Conversation は原則作成者が Resolve する

---

- issue 名はコミットメッセージと同じ形式
- Pull Request 名も同様
- ローカルで開発する時はフォーマッタをかけること
  - Prettier を使用
  - VSCode などは保存時フォーマットを有効化するといいと思います
- マージの形式は `squash merge`

## 2.3. **ディレクトリ構成**

```c
├── .env            // Set environment variables
├── README.md       // here
├── src
│   ├── api         // Api adapter interfaces
│   │   └── resas   // RESAS api adapters
│   ├── components  // Shared react components
│   ├── models      // DTO for api data
│   ├── pages       // Pages
│   ├── stories     // Storybook
│   └── styles      // For CSS Module
└── test            // Place test codes
```

## 2.4. コーディング規約

- import は絶対パスを推奨

# 3. ドキュメント

## 3.1 ドメインオブジェクト

- `src/models/` 以下
- 都道府県や人口構成を定義しています
- API のレスポンスなどをフロントで使用するときはこれに加工して使用します

## 3.2. API のアダプター

- Mock (ダミーの値を返す) と RESAS (本番環境) で 2 つ実装します
- アダプターの設計
  - 都道府県一覧取得
    - `Prefecture` ( `src/models/prefecture.ts` ) の配列を返します
    - 何らかのエラーが発生したら `[]` を返します
  - 人口構成取得
    - リクエストでは、取得対象の都道府県コードを受け取ります
    - RESAS のレスポンスでは `年少人口` なども返されますが、 `総人口` のみを考慮します
    - `Transition` ( `src/models/transition.ts` ) を返します
    - 何らかのエラーが発生したら `undefined` を返します
- RESAS API のエンドポイントの共通部分などは `src/api/resas/constants.ts` に定義します

## 3.3. TODO: API 用のフック

## 3.4. テスト

- スナップショットテストを行います
- ある時点でのコンポーネントの DOM 構造を保存することで、コンポーネントが意図しない変更を受けていないかを確かめます
- コンポーネントやページなどを作成したら、 `tests/` 以下に `hoge.spec.tsx` ファイルを作成してテストを書いてください
- テストを行う時は `pnpm test` を実行してください
- コンポーネントやページに変更を加えた場合は `pnpm test:update` を実行してください (スナップショットが再生成されます)
