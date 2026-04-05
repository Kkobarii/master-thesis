### 6 Návrh aplikace

- **6.1 Informační architektura a navigační koncepty** (Hotovo)
- **6.2 Návrh uživatelského rozhraní a ergonomie** (Hotovo, včetně responzivity a návrhu komparačního layoutu pro více algoritmů)
- **6.3 Konceptuální návrh vizualizačních komponent** (Hotovo)
- **6.4 Vizuální styl a barevná sémantika** (Hotovo, včetně konceptu Light/Dark režimů)
- **6.5 Konceptuální model řízení simulace** (Hotovo)
  - 6.5.1 Architektonický vzor předpočítaných stavů (Pre-computed State Queue)
  - 6.5.2 Hierarchický model krokování datových struktur
- **6.6 Návrh datových abstrakcí a rozhraní**
  - 6.6.1 Datové modely pro simulaci třídicích algoritmů (`Item`, kroky)
  - 6.6.2 Abstrakce a reprezentace datových struktur (`DataNode`, `OperationData`)
  - 6.6.3 Provázání logické vrstvy s uživatelským rozhraním a překlady (vazba na pseudokód a i18n klíče)

### 7 Implementace a architektura systému

- **7.1 Celková architektura a modularita systému** (Rozdělení na nezávislé sub-systémy)
- **7.2 Implementační jádro třídicích algoritmů**
  - 7.2.1 Stavový automat a správa životního cyklu (`StepManager`)
  - 7.2.2 Generování a záznam transakční historie (`TraceBuilder`)
- **7.3 Implementační jádro datových struktur**
  - 7.3.1 Událostmi řízený model (`OperationManager` a `EventType`)
  - 7.3.2 Systém delegace a zpracování kroků (`StepHandlerBase` a potomci)
- **7.4 Vizualizační engine a řešení technologických omezení**
  - **7.4.1 Vizuální reprezentace rekurzivních algoritmů** _(Přesunuto sem: vertikální posuvy a stínování kontextu u Merge/Quick sortu)_
  - 7.4.2 Orchestrace a animace grafových struktur (`Animator`)
  - 7.4.3 Implementace vlastní anotační vrstvy (`Annotator` a překonání limitů vis-network)
  - 7.4.4 Technologické limity vizualizace B-stromů
- **7.5 Pokročilé funkcionality a technické výzvy**
  - 7.5.1 Dynamická internacionalizace (i18n) v elementu Canvas
  - 7.5.2 Responzivní design a adaptace na barevné motivy
  - 7.5.3 Souběžné zpracování simulací a jejich komparace _(Bývalý závod algoritmů – velkolepé finále)_
