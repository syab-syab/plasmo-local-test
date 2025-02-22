import { useState } from "react"
import { useStorage } from "@plasmohq/storage/hook"

function IndexSidePanel() {
  const [data, setData] = useState("")
  const [dataArray, setDataArray] = useStorage<Array<string>>("data-array", ["test1", "test2", "test3"])

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
      <ul>
        {
          dataArray.map((d) => {
            return (
              <li>{d}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default IndexSidePanel