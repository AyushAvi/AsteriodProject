function Text({text1, text2, additionalText}) {
    return(
        <p className="para">{text1}<br/>{text2}<span>{additionalText}</span></p>
    )
}

export default Text;