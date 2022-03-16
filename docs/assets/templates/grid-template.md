<grid class="grid" :style="[config.gridTemplateColumns ? {'gridTemplateColumns': config.gridTemplateColumns} : {'gridTemplateColumns': '1fr 1fr 1fr'}]">
    <div class="grid-item" v-if="!item.hide" v-for="item in items">
        <span class="grid-item-title" v-html=item.title></span>
        <img alt="IMAGE" v-if="item.image" class="grid-item-image" :src=item.image />
        <div class="grid-item-description" v-html=item.description></div>
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
        <a class="download-button-btn" :style="[item.customContent ? {'marginTop': 'unset'} : {'marginTop': 'auto'}]" v-if="item.download" :href=item.download target="_blank" rel="noopener"><span class="download-button-text">Download</span><i class="fa fa-download download-button-icon" aria-hidden="true"></i></a>
    </div>
</grid>