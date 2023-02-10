module.exports = (plugin) => {

    plugin.policies["is-owner"] = (ctx) => {
        console.log("hep", ctx);
    };


    return plugin;
};
