const sentenceTag = document.querySelector('input[type="text"]');

const typesizeTag = document.querySelector('input[name="typesize"]');
const typesizeOutput = document.querySelector('span.typesize-output');

const lineheightTag = document.querySelector('input[name="lineheight"]')
const lineheightOutput = document.querySelector('span.lineheight-output')

const italicTag = document.querySelector('input[name="italic"]')

const outputTag = document.querySelector("textarea.output");
const originalText = outputTag.value;

// when type the sentence, update the output. If there is no value, use original text

sentenceTag.addEventListener("keyup", function () {
    if (this.value) {
        outputTag.value = this.value;
    } else {
        outputTag.value = originalText;
    }
})

// when I type in the output, update the sentence

outputTag.addEventListener("keyup", function() {
    sentenceTag.value = this.value;
})

// when change the slider, update the text size

typesizeTag.addEventListener("input", function() {
    outputTag.style.fontSize = this.value + "px";
    typesizeOutput.innerHTML= this.value + "pixels"
})

// line height

lineheightTag.addEventListener("input", function() {
    outputTag.style.lineHeight = this.value;
    lineheightOutput.innerHTML = this.value;
})

// when box is checked make italic

italicTag.addEventListener("change", function() {
    if(this.checked) {
        outputTag.style.fontStyle = "italic"
    } else {
        outputTag.style.fontStyle = "normal"
    }
})

