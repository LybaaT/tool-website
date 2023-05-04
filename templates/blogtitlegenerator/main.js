function blogTitle() {

    let gpturl = "http://127.0.0.1:4050?p="
    const numberOfIdeas = document.getElementById('numberOfIdeas').value;
    const blogTopic = document.getElementById('topicInput').value;
    const blogPointers = document.getElementById('mainPoints').value;

    const final_prompt = `Give me ${numberOfIdeas} Blog Title Ideas for a blog on the topic of ${blogTopic}. The blog has these keypoints: ${blogPointers}. Please make sure each blog title is no longer than 12 words, is on topic and doesn't have additional descriptions.`;

    // Combine url and prompt together and fetch that site
    fetch(gpturl + final_prompt).then((response) => {

        // Get the text from the response
        response.text().then((gptResponse) => {

            // Do whatever you want with the gptResponse string
            document.getElementById('textOutput').value = gptResponse;

        })
    })
}