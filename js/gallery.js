const images = [
    {
    name: "Mr. Eat's Voice Clips",
    preview: "content/previews/Mr. Eat's Voice Clips.png",
    file: "content/sounds/Mr. Eat's Voice Clips.zip",
    descr: "A collection of original Mr.Eat's phrases (+2 alternative, extra phrases)."
    },

    {
        name: "Mr. Eat's Music - Classics",
        preview: "content/previews/mr_eat_music_classics_cover.png",
        file: "content/sounds/Mr. Eat's music - Classics.zip",
        descr: "Very old, iconic Mr. Eat's music. Some of them were a little bit remastered to be louder."
    },

    {
    name: "Brilcon's music - 2026",
    preview: "content/previews/brilcon_music_2026_cover.png",
    file: "content/sounds/Brilcon's music - 2026.zip",
    descr: "4 brand-new tracks about Mr.Eat, made in 2026."
    },

    {
    name: "Brilcon's music - 2025",
    preview: "content/previews/brilcon_music_2025_cover.png",
    file: "content/sounds/Brilcon's music - 2025.zip",
    descr: "The most musical year with the most tracks for any situation!"
    },

    {
    name: "Brilcon's music - 2024",
    preview: "content/previews/brilcon_music_2024_cover.png",
    file: "content/sounds/Brilcon's music - 2024.zip",
    descr: "A little, but legendary pack, that includes Spoon Dance and Griffpatch's song!"
    },


];


const gallery = document.getElementById("gallery");

// Создаём заголовок галереи
/*const title = document.createElement("h1");
title.innerHTML = `Packs`;
gallery.appendChild(title);*/


images.forEach(image => {

    const card = document.createElement("div");

    card.className = "image-card";


    card.innerHTML = `

        <img
            src="${image.preview}"
            alt="${image.name}"
        >



        <h2>${image.name}</h2>

                <p> 
            ${image.descr}
        </p>

        <a class="download_button" href="${image.file}" download >
            Download
        </a>



        <p> 
           Licence: CC BY-NC 4.0
        </p>
    `;

    gallery.appendChild(card);

    // Calculating file size
    const sizeElement = card.querySelector(".download_button");

    fetch(image.file, { method: "HEAD" })
        .then(response => {
            const size = response.headers.get("Content-Length");

            if (size) {
                sizeElement.textContent =
                    "Download (" + formatFileSize(size)+")";
            } else {
                sizeElement.textContent =
                    "Download";
            }
        })
        .catch(() => {
            sizeElement.textContent =
                "Download";
        });

});

//

function formatFileSize(bytes) {

    if (bytes < 1024) {
        return bytes + " B";
    }

    if (bytes < 1024 * 1024) {
        return (bytes / 1024).toFixed(1) + " KB";
    }

    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

/*
        <div>
            <p> 
                License: <strong>CC BY-NC 4.0</strong>
            </p>
             
            <p>
                Free to use in non-commercial projects with attribution.
            </p>
        </div> */