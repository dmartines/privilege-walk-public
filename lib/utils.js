
import { Promise } from 'meteor/promise';

module.exports = {
    setDarkLightMode() {
        let dlmode = localStorage.getItem('pw-dlmode');
        if (dlmode == null)
            dlmode = true;

        dlmode = JSON.parse(dlmode);
        localStorage.setItem('pw-dlmode', !dlmode);

    },
    getDarkLightMode() {
        let dlmode = localStorage.getItem('pw-dlmode');
        if (dlmode == null)
            dlmode = true;

        dlmode = JSON.parse(dlmode);
        return dlmode;
    },
};