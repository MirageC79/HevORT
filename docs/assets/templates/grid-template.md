<grid class="grid" :style="[config.gridTemplateColumns ? {'gridTemplateColumns': config.gridTemplateColumns} : {'gridTemplateColumns': '1fr 1fr 1fr'}]">
    <div class="grid-item" v-if="!item.hide" v-for="item in items">
        <span class="grid-item-title-wrapper">
          <span class="grid-item-title" v-html=item.title></span>
          <span class="grid-item-state" v-text="item.status ? item.status : 'Active'"></span>
        </span>
        <div class="grid-item-container">
          <img alt="IMAGE" v-if="item.image" class="grid-item-image" :src=item.image />
        <div class="grid-item-description-container">
          <button class="grid-item-description-button hevort-btn" @click="(e) => toggleDescription(e, item)">
            <span class="grid-item-description-button-text" v-text="item.descriptionExpanded ? 'Hide Description' : 'Show Description'"></span>
            <i class="grid-item-description-button-icon" :class="item.descriptionExpanded ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down'"></i>
          </button>
          <div class="grid-item-description"
               :class="(item.descriptionExpanded) ? 'grid-item-description-expanded' : ''"
               v-html=item.description>
          </div>
        </div>
        <div class="grid-item-custom-content" v-if="item.customContent" v-html="item.customContent"></div>
        <div class="grid-item-credits" v-if="item.credits">
            <span class="grid-item-credit-header">Credits</span>
                <ul class="grid-item-credit-list">
                    <li class="grid-item-credit-list-item" v-for="credit in item.credits">
                        <div class="grid-item-credit-list-item-wrapper">
                            <span class="grid-item-credit-list-item-name">{{ credit.name }}</span>
                            <span v-if="credit.description">{{ credit.description }}</span>
                        </div>
                    </li>
                </ul>
        </div>
        <div class="grid-item-button-container" v-if="item.buttons" :style="[item.customContent ? {'marginTop': 'unset'} : {'marginTop': 'auto'}, item.buttons.length === 1 ? {'grid-template-columns': '1fr'} : {'grid-template-columns': '1fr 1fr'}]" :style>
            <a class="hevort-btn" v-for="button in item.buttons" v-if="button.link" :href="button.link" :target="[button.target ? button.target : '_blank']"><span class="hevort-btn-text">{{ button.title }}</span><i v-if="button.icon" :class="button.icon"></i></a>
        </div>
        </div>
    </div>
</grid>