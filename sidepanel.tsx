import { useState } from "react"

function IndexSidePanel() {
  const [data, setData] = useState("")

  // indexedDBが使えないから
  // key(日本語OKならヨシ): [](ストックしたワードを文字列で配列にする)
  // という感じで実装できそう
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <h2>
        localStorageでPrivate Word Stockのような機能を実装してみる
      </h2>
      <input onChange={(e) => setData(e.target.value)} value={data} />
    </div>
  )
}

export default IndexSidePanel