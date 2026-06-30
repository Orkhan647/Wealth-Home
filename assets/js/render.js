const propertyList = document.getElementById("propertyList");

properties.forEach((property) => {
  propertyList.innerHTML += `
    <div class="card">

      <div class="card-banner">

        <figure class="img-holder" style="--width: 585; --height: 390">
          <img
            src="${property.image}"
            width="585"
            height="390"
            alt="${property.alt}"
            class="img-cover"
          />
        </figure>

        ${
          property.badge
            ? `<span class="badge label-medium">${property.badge}</span>`
            : ""
        }

        <button
          class="icon-btn fav-btn"
          aria-label="add to favorite"
          data-toggle-btn
        >
          <span class="material-symbols-rounded" aria-hidden="true">
            favorite
          </span>
        </button>

      </div>

      <div class="card-content">

        <span class="title-large">${property.price}</span>

        <h3>
          <a href="#" class="title-small card-title">
            ${property.title}
          </a>
        </h3>

        <address class="body-medium card-text">
          ${property.address}
        </address>

        <div class="card-meta-list">

          <div class="meta-item">
            <span class="material-symbols-rounded meta-icon" aria-hidden="true">
              bed
            </span>

            <span class="meta-text label-medium">
              ${property.bed} Bed
            </span>
          </div>

          <div class="meta-item">
            <span class="material-symbols-rounded meta-icon" aria-hidden="true">
              bathtub
            </span>

            <span class="meta-text label-medium">
              ${property.bath} Bath
            </span>
          </div>

          <div class="meta-item">
            <span class="material-symbols-rounded meta-icon" aria-hidden="true">
              straighten
            </span>

            <span class="meta-text label-medium">
              ${property.sqft} sqft
            </span>
          </div>

        </div>

      </div>

    </div>
  `;
});

// Favorite düymələri
document.querySelectorAll("[data-toggle-btn]").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
  });
});