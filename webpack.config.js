const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // Ausgabepfad für generierte Dateien
    .setOutputPath('public/build/')
    // Öffentlicher Pfad zu den Assets
    .setPublicPath('/build')
    // Haupt-JavaScript-Eintragspunkt
    .addEntry('app', './assets/app.js')
    // Aufteilen der Einträge in kleinere Dateien (z. B. Vendor-Bundles)
    .splitEntryChunks()
    // Aktivieren der Symfony UX Stimulus Bridge (für Stimulus-Controller)
    .enableStimulusBridge('./assets/controllers.json')
    // Nur eine Runtime-Datei erzeugen
    .enableSingleRuntimeChunk()
    // Ausgabeverzeichnis vor jedem Build leeren
    .cleanupOutputBeforeBuild()
    // Benachrichtigungen bei Build-Vorgängen aktivieren
    .enableBuildNotifications()
    // Source-Maps für Debugging aktivieren (außer in der Produktion)
    .enableSourceMaps(!Encore.isProduction())
    // Versionierung der Dateien aktivieren (z. B. `app.js` → `app.[hash].js`)
    .enableVersioning(Encore.isProduction())
    // Babel-Konfiguration erweitern
    .configureBabel((config) => {
        config.plugins.push('@babel/plugin-proposal-class-properties');
    })
    // Babel-Preset-Env konfigurieren (für moderne JS-Features)
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = '3.23';
    })
    // SCSS/SASS-Dateien verarbeiten
    .enableSassLoader();

module.exports = Encore.getWebpackConfig();
