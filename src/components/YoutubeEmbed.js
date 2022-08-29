import React from 'react'

const YoutubeEmbed = ({ embedId }) => (
  <iframe
    width="693"
    height="400"
    src={`https://www.youtube.com/embed/${embedId}`}
    frameBorder="0"
    allowFullScreen
    title="Youtube"
    style={{backgroundColor: "var(--black)"}}
  />
)

export default YoutubeEmbed