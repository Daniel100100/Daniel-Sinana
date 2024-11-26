## Anleitung zur Einrichtung des Symfony-Projekts

### 1. Repository klonen

```bash
git clone https://github.com/trendtecug/hinschg.datenschutzmandat.de
cd hinschg.datenschutzmandat.de
```

#### Bitte bei den Schritten 2-5 sichergehen dass schreibrechte im root verzeichnis vorhanden sind.

### 2. Composer installieren

```bash
composer update
```

### 3. NPM installieren

```bash
npm install
```

### 4. Frontend-Assets bauen

```bash
npm run dev
npm run build
```

### 5. Datenbank einrichten (vorher sichergehen das sie vorhanden und eingebunden ist)

```bash
php bin/console doctrine:schema:update --force --complete
```

Stellt sicher, dass die `.env`-Datei gemäß euren Anforderungen konfiguriert ist.


### Einrichtung eines Virtual Hosts

Ihr müsst in eurem Docker LAMP Stack Ordner in den Konfigurationsordner `/config/vhosts` wechseln.

Dort solltet ihr einen Virtual Host für `hinschg.localhost` einrichten, der auf `/var/www/html/hinschg/public` zeigt.

Die Konfigurationsdatei findet ihr im `vhosts` Ordner hier im Repository.

