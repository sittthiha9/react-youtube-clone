import { Tooltip } from "react-tooltip"

const Tooltips = () => {
  const Tooltips = ["settings", "search", "voiceSearch"]
  return (
    <>{Tooltips.map((id, index) => <Tooltip style={{zIndex: "1000"}} id={id} key={index} noArrow/>)}</>
  )
}

export default Tooltips