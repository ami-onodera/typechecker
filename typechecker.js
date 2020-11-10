const sentenceTag = document.querySelector('input[type="text"]');
const outputTag = document.querySelector("section.output");
const originalText = outputTag.innerHTML

// when type the sentence, update the output. If there is no value, use original text

sentenceTag.addEventListener("keyup", function () {
    if (this.value) {
        outputTag.innerHTML = this.value;
    } else {
        outputTag.innerHTML = originalText;
    }
})

