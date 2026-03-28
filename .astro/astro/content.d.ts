declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"analytics": {
"streambee.md": {
	id: "streambee.md";
  slug: "streambee";
  body: string;
  collection: "analytics";
  data: any
} & { render(): Render[".md"] };
"streams-charts.md": {
	id: "streams-charts.md";
  slug: "streams-charts";
  body: string;
  collection: "analytics";
  data: any
} & { render(): Render[".md"] };
"sullygnome.md": {
	id: "sullygnome.md";
  slug: "sullygnome";
  body: string;
  collection: "analytics";
  data: any
} & { render(): Render[".md"] };
"twitchtracker.md": {
	id: "twitchtracker.md";
  slug: "twitchtracker";
  body: string;
  collection: "analytics";
  data: any
} & { render(): Render[".md"] };
};
"blog": {
"how-to-change-twitch-name.md": {
	id: "how-to-change-twitch-name.md";
  slug: "how-to-change-twitch-name";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"how-to-host-on-twitch.md": {
	id: "how-to-host-on-twitch.md";
  slug: "how-to-host-on-twitch";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"private-twitch-stream.md": {
	id: "private-twitch-stream.md";
  slug: "private-twitch-stream";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"streaming-isnt-a-dream-job.md": {
	id: "streaming-isnt-a-dream-job.md";
  slug: "streaming-isnt-a-dream-job";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"twitch-chat-logs-how-to-check-them.md": {
	id: "twitch-chat-logs-how-to-check-them.md";
  slug: "twitch-chat-logs-how-to-check-them";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"twitch-stream-delay.md": {
	id: "twitch-stream-delay.md";
  slug: "twitch-stream-delay";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"twitch-teams.md": {
	id: "twitch-teams.md";
  slug: "twitch-teams";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"what-is-malding.md": {
	id: "what-is-malding.md";
  slug: "what-is-malding";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
};
"bots": {
"botisimo.md": {
	id: "botisimo.md";
  slug: "botisimo";
  body: string;
  collection: "bots";
  data: any
} & { render(): Render[".md"] };
"fossabot.md": {
	id: "fossabot.md";
  slug: "fossabot";
  body: string;
  collection: "bots";
  data: any
} & { render(): Render[".md"] };
"moobot.md": {
	id: "moobot.md";
  slug: "moobot";
  body: string;
  collection: "bots";
  data: any
} & { render(): Render[".md"] };
"nightbot.md": {
	id: "nightbot.md";
  slug: "nightbot";
  body: string;
  collection: "bots";
  data: any
} & { render(): Render[".md"] };
"streamer-bot.md": {
	id: "streamer-bot.md";
  slug: "streamer-bot";
  body: string;
  collection: "bots";
  data: any
} & { render(): Render[".md"] };
"wizebot.md": {
	id: "wizebot.md";
  slug: "wizebot";
  body: string;
  collection: "bots";
  data: any
} & { render(): Render[".md"] };
};
"broadcast-tools": {
"lightstream.md": {
	id: "lightstream.md";
  slug: "lightstream";
  body: string;
  collection: "broadcast-tools";
  data: any
} & { render(): Render[".md"] };
"obs.md": {
	id: "obs.md";
  slug: "obs";
  body: string;
  collection: "broadcast-tools";
  data: any
} & { render(): Render[".md"] };
"restream.md": {
	id: "restream.md";
  slug: "restream";
  body: string;
  collection: "broadcast-tools";
  data: any
} & { render(): Render[".md"] };
"twitch-beta-studio.md": {
	id: "twitch-beta-studio.md";
  slug: "twitch-beta-studio";
  body: string;
  collection: "broadcast-tools";
  data: any
} & { render(): Render[".md"] };
"vmix.md": {
	id: "vmix.md";
  slug: "vmix";
  body: string;
  collection: "broadcast-tools";
  data: any
} & { render(): Render[".md"] };
"xsplit-broadcaster.md": {
	id: "xsplit-broadcaster.md";
  slug: "xsplit-broadcaster";
  body: string;
  collection: "broadcast-tools";
  data: any
} & { render(): Render[".md"] };
};
"graphics": {
"elgato-marketplace.md": {
	id: "elgato-marketplace.md";
  slug: "elgato-marketplace";
  body: string;
  collection: "graphics";
  data: any
} & { render(): Render[".md"] };
"gamingvisuals.md": {
	id: "gamingvisuals.md";
  slug: "gamingvisuals";
  body: string;
  collection: "graphics";
  data: any
} & { render(): Render[".md"] };
"getrekt.md": {
	id: "getrekt.md";
  slug: "getrekt";
  body: string;
  collection: "graphics";
  data: any
} & { render(): Render[".md"] };
"nerd-or-die.md": {
	id: "nerd-or-die.md";
  slug: "nerd-or-die";
  body: string;
  collection: "graphics";
  data: any
} & { render(): Render[".md"] };
"own3d.md": {
	id: "own3d.md";
  slug: "own3d";
  body: string;
  collection: "graphics";
  data: any
} & { render(): Render[".md"] };
"streamelements.md": {
	id: "streamelements.md";
  slug: "streamelements";
  body: string;
  collection: "graphics";
  data: any
} & { render(): Render[".md"] };
"streamlabs.md": {
	id: "streamlabs.md";
  slug: "streamlabs";
  body: string;
  collection: "graphics";
  data: any
} & { render(): Render[".md"] };
"streamplay-graphics.md": {
	id: "streamplay-graphics.md";
  slug: "streamplay-graphics";
  body: string;
  collection: "graphics";
  data: any
} & { render(): Render[".md"] };
"streamshark.md": {
	id: "streamshark.md";
  slug: "streamshark";
  body: string;
  collection: "graphics";
  data: any
} & { render(): Render[".md"] };
"streamspell.md": {
	id: "streamspell.md";
  slug: "streamspell";
  body: string;
  collection: "graphics";
  data: any
} & { render(): Render[".md"] };
};
"interviews": {
"alh4zr3d.md": {
	id: "alh4zr3d.md";
  slug: "alh4zr3d";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"aliawgharvey.md": {
	id: "aliawgharvey.md";
  slug: "aliawgharvey";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"anikichad.md": {
	id: "anikichad.md";
  slug: "anikichad";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"animeannieplays.md": {
	id: "animeannieplays.md";
  slug: "animeannieplays";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"apestylespoker.md": {
	id: "apestylespoker.md";
  slug: "apestylespoker";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"aznboi.md": {
	id: "aznboi.md";
  slug: "aznboi";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"baeginning.md": {
	id: "baeginning.md";
  slug: "baeginning";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"bakamaica.md": {
	id: "bakamaica.md";
  slug: "bakamaica";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"batkitto.md": {
	id: "batkitto.md";
  slug: "batkitto";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"beanomm.md": {
	id: "beanomm.md";
  slug: "beanomm";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"bizsnes.md": {
	id: "bizsnes.md";
  slug: "bizsnes";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"blueandqueenie.md": {
	id: "blueandqueenie.md";
  slug: "blueandqueenie";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"bluee.md": {
	id: "bluee.md";
  slug: "bluee";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"bracketslive.md": {
	id: "bracketslive.md";
  slug: "bracketslive";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"candygrace.md": {
	id: "candygrace.md";
  slug: "candygrace";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"ceweina.md": {
	id: "ceweina.md";
  slug: "ceweina";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"chlooeeeexo.md": {
	id: "chlooeeeexo.md";
  slug: "chlooeeeexo";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"couriway.md": {
	id: "couriway.md";
  slug: "couriway";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"cvw220.md": {
	id: "cvw220.md";
  slug: "cvw220";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"danotage.md": {
	id: "danotage.md";
  slug: "danotage";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"deiviamos.md": {
	id: "deiviamos.md";
  slug: "deiviamos";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"desynkro.md": {
	id: "desynkro.md";
  slug: "desynkro";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"dgcourtroom.md": {
	id: "dgcourtroom.md";
  slug: "dgcourtroom";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"dodorododo.md": {
	id: "dodorododo.md";
  slug: "dodorododo";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"ekuegan.md": {
	id: "ekuegan.md";
  slug: "ekuegan";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"empyre.md": {
	id: "empyre.md";
  slug: "empyre";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"epicdan22.md": {
	id: "epicdan22.md";
  slug: "epicdan22";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"feriley.md": {
	id: "feriley.md";
  slug: "feriley";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"fiamma.md": {
	id: "fiamma.md";
  slug: "fiamma";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"finamenon.md": {
	id: "finamenon.md";
  slug: "finamenon";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"flowdriver.md": {
	id: "flowdriver.md";
  slug: "flowdriver";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"gabbydm.md": {
	id: "gabbydm.md";
  slug: "gabbydm";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"galasrinie.md": {
	id: "galasrinie.md";
  slug: "galasrinie";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"graceful.md": {
	id: "graceful.md";
  slug: "graceful";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"grandpoobear.md": {
	id: "grandpoobear.md";
  slug: "grandpoobear";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"hamcheese.md": {
	id: "hamcheese.md";
  slug: "hamcheese";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"hirokaisen.md": {
	id: "hirokaisen.md";
  slug: "hirokaisen";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"holyxdd.md": {
	id: "holyxdd.md";
  slug: "holyxdd";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"imperialgrrl.md": {
	id: "imperialgrrl.md";
  slug: "imperialgrrl";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"intruderfox.md": {
	id: "intruderfox.md";
  slug: "intruderfox";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"itsqueennovaa.md": {
	id: "itsqueennovaa.md";
  slug: "itsqueennovaa";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"ivanahyde.md": {
	id: "ivanahyde.md";
  slug: "ivanahyde";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"jamesbond235.md": {
	id: "jamesbond235.md";
  slug: "jamesbond235";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"jowybear.md": {
	id: "jowybear.md";
  slug: "jowybear";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"kaylakittey.md": {
	id: "kaylakittey.md";
  slug: "kaylakittey";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"kettsley.md": {
	id: "kettsley.md";
  slug: "kettsley";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"killerexlive.md": {
	id: "killerexlive.md";
  slug: "killerexlive";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"kimochicafe.md": {
	id: "kimochicafe.md";
  slug: "kimochicafe";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"krewlex.md": {
	id: "krewlex.md";
  slug: "krewlex";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"kuzuryio.md": {
	id: "kuzuryio.md";
  slug: "kuzuryio";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"kyente.md": {
	id: "kyente.md";
  slug: "kyente";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"kyoryuhunter.md": {
	id: "kyoryuhunter.md";
  slug: "kyoryuhunter";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"leeshcapeesh.md": {
	id: "leeshcapeesh.md";
  slug: "leeshcapeesh";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"littlesiha.md": {
	id: "littlesiha.md";
  slug: "littlesiha";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"madeofjade.md": {
	id: "madeofjade.md";
  slug: "madeofjade";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"megasett.md": {
	id: "megasett.md";
  slug: "megasett";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"miametzmusic.md": {
	id: "miametzmusic.md";
  slug: "miametzmusic";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"michanss.md": {
	id: "michanss.md";
  slug: "michanss";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"middleagedstream.md": {
	id: "middleagedstream.md";
  slug: "middleagedstream";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"miki.md": {
	id: "miki.md";
  slug: "miki";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"minishkat.md": {
	id: "minishkat.md";
  slug: "minishkat";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"mistressmord.md": {
	id: "mistressmord.md";
  slug: "mistressmord";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"mopgarden.md": {
	id: "mopgarden.md";
  slug: "mopgarden";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"obrodo.md": {
	id: "obrodo.md";
  slug: "obrodo";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"otterpop18.md": {
	id: "otterpop18.md";
  slug: "otterpop18";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"ottomated.md": {
	id: "ottomated.md";
  slug: "ottomated";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"purple.md": {
	id: "purple.md";
  slug: "purple";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"rayeatscookies.md": {
	id: "rayeatscookies.md";
  slug: "rayeatscookies";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"shykurobooo.md": {
	id: "shykurobooo.md";
  slug: "shykurobooo";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"stevesketches.md": {
	id: "stevesketches.md";
  slug: "stevesketches";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"syraphic.md": {
	id: "syraphic.md";
  slug: "syraphic";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"tequilashots1500.md": {
	id: "tequilashots1500.md";
  slug: "tequilashots1500";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"tixee.md": {
	id: "tixee.md";
  slug: "tixee";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"uncivilqueen.md": {
	id: "uncivilqueen.md";
  slug: "uncivilqueen";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"uniquegeese.md": {
	id: "uniquegeese.md";
  slug: "uniquegeese";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"viiki.md": {
	id: "viiki.md";
  slug: "viiki";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"walteewartooth.md": {
	id: "walteewartooth.md";
  slug: "walteewartooth";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"xinxinwong.md": {
	id: "xinxinwong.md";
  slug: "xinxinwong";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
"ybbaaabby.md": {
	id: "ybbaaabby.md";
  slug: "ybbaaabby";
  body: string;
  collection: "interviews";
  data: any
} & { render(): Render[".md"] };
};
"music": {
"chillhop.md": {
	id: "chillhop.md";
  slug: "chillhop";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"epidemic-sound.md": {
	id: "epidemic-sound.md";
  slug: "epidemic-sound";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"gamechops.md": {
	id: "gamechops.md";
  slug: "gamechops";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"legis-music.md": {
	id: "legis-music.md";
  slug: "legis-music";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"monstercat-gold.md": {
	id: "monstercat-gold.md";
  slug: "monstercat-gold";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"ncs-nocopyrightsounds.md": {
	id: "ncs-nocopyrightsounds.md";
  slug: "ncs-nocopyrightsounds";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"outertone.md": {
	id: "outertone.md";
  slug: "outertone";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"own3d-music.md": {
	id: "own3d-music.md";
  slug: "own3d-music";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"pretzel.md": {
	id: "pretzel.md";
  slug: "pretzel";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"soundstripe.md": {
	id: "soundstripe.md";
  slug: "soundstripe";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"streambeats.md": {
	id: "streambeats.md";
  slug: "streambeats";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
"streamlabs-powered-by-songtradr.md": {
	id: "streamlabs-powered-by-songtradr.md";
  slug: "streamlabs-powered-by-songtradr";
  body: string;
  collection: "music";
  data: any
} & { render(): Render[".md"] };
};
"sponsorships": {
"5-hour-energy.md": {
	id: "5-hour-energy.md";
  slug: "5-hour-energy";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"acer.md": {
	id: "acer.md";
  slug: "acer";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"adobe.md": {
	id: "adobe.md";
  slug: "adobe";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"advancedgg.md": {
	id: "advancedgg.md";
  slug: "advancedgg";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"ai-licia.md": {
	id: "ai-licia.md";
  slug: "ai-licia";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"akracing.md": {
	id: "akracing.md";
  slug: "akracing";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"amazon.md": {
	id: "amazon.md";
  slug: "amazon";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"avermedia.md": {
	id: "avermedia.md";
  slug: "avermedia";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"barkbox.md": {
	id: "barkbox.md";
  slug: "barkbox";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"battle-beaver-customs.md": {
	id: "battle-beaver-customs.md";
  slug: "battle-beaver-customs";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"beacn.md": {
	id: "beacn.md";
  slug: "beacn";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"bisecthosting.md": {
	id: "bisecthosting.md";
  slug: "bisecthosting";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"brickhouse-nutrition.md": {
	id: "brickhouse-nutrition.md";
  slug: "brickhouse-nutrition";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"chess-com.md": {
	id: "chess-com.md";
  slug: "chess-com";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"chewy.md": {
	id: "chewy.md";
  slug: "chewy";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"cinch-gaming.md": {
	id: "cinch-gaming.md";
  slug: "cinch-gaming";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"clickncell.md": {
	id: "clickncell.md";
  slug: "clickncell";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"clx-gaming.md": {
	id: "clx-gaming.md";
  slug: "clx-gaming";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"coinsmart.md": {
	id: "coinsmart.md";
  slug: "coinsmart";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"corsair.md": {
	id: "corsair.md";
  slug: "corsair";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"cosmic-snax.md": {
	id: "cosmic-snax.md";
  slug: "cosmic-snax";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"cratejoy.md": {
	id: "cratejoy.md";
  slug: "cratejoy";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"crowd-control.md": {
	id: "crowd-control.md";
  slug: "crowd-control";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"cybeart.md": {
	id: "cybeart.md";
  slug: "cybeart";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"das-keyboard.md": {
	id: "das-keyboard.md";
  slug: "das-keyboard";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"dowinx.md": {
	id: "dowinx.md";
  slug: "dowinx";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"dubby.md": {
	id: "dubby.md";
  slug: "dubby";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"dxracer.md": {
	id: "dxracer.md";
  slug: "dxracer";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"eathlete-labs.md": {
	id: "eathlete-labs.md";
  slug: "eathlete-labs";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"eklipse.md": {
	id: "eklipse.md";
  slug: "eklipse";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"elgato.md": {
	id: "elgato.md";
  slug: "elgato";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"engage.md": {
	id: "engage.md";
  slug: "engage";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"epic-games.md": {
	id: "epic-games.md";
  slug: "epic-games";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"epic-water-filters.md": {
	id: "epic-water-filters.md";
  slug: "epic-water-filters";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"epidemic-sound.md": {
	id: "epidemic-sound.md";
  slug: "epidemic-sound";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"esport-certified.md": {
	id: "esport-certified.md";
  slug: "esport-certified";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"ewinracing.md": {
	id: "ewinracing.md";
  slug: "ewinracing";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"expressvpn.md": {
	id: "expressvpn.md";
  slug: "expressvpn";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"fable-beard-co.md": {
	id: "fable-beard-co.md";
  slug: "fable-beard-co";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"fanatical.md": {
	id: "fanatical.md";
  slug: "fanatical";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"fatal-grips.md": {
	id: "fatal-grips.md";
  slug: "fatal-grips";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"fiverr.md": {
	id: "fiverr.md";
  slug: "fiverr";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"floating-grip.md": {
	id: "floating-grip.md";
  slug: "floating-grip";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"forever-grips-gaming.md": {
	id: "forever-grips-gaming.md";
  slug: "forever-grips-gaming";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"fourthwall.md": {
	id: "fourthwall.md";
  slug: "fourthwall";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"fractal-design.md": {
	id: "fractal-design.md";
  slug: "fractal-design";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"freshen-up-energy.md": {
	id: "freshen-up-energy.md";
  slug: "freshen-up-energy";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"g-fuel.md": {
	id: "g-fuel.md";
  slug: "g-fuel";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"gamefly.md": {
	id: "gamefly.md";
  slug: "gamefly";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"gamer-advantage.md": {
	id: "gamer-advantage.md";
  slug: "gamer-advantage";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"gamer-supps.md": {
	id: "gamer-supps.md";
  slug: "gamer-supps";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"gamestop.md": {
	id: "gamestop.md";
  slug: "gamestop";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"gamivo.md": {
	id: "gamivo.md";
  slug: "gamivo";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"glorious-pc-gaming.md": {
	id: "glorious-pc-gaming.md";
  slug: "glorious-pc-gaming";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"glytch-energy.md": {
	id: "glytch-energy.md";
  slug: "glytch-energy";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"govee.md": {
	id: "govee.md";
  slug: "govee";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"gportal.md": {
	id: "gportal.md";
  slug: "gportal";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"green-man-gaming.md": {
	id: "green-man-gaming.md";
  slug: "green-man-gaming";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"grippys.md": {
	id: "grippys.md";
  slug: "grippys";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"humble-bundle.md": {
	id: "humble-bundle.md";
  slug: "humble-bundle";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"hyperx.md": {
	id: "hyperx.md";
  slug: "hyperx";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"insane-labz.md": {
	id: "insane-labz.md";
  slug: "insane-labz";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"intotheam.md": {
	id: "intotheam.md";
  slug: "intotheam";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"ironside-computers.md": {
	id: "ironside-computers.md";
  slug: "ironside-computers";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"jerkypro.md": {
	id: "jerkypro.md";
  slug: "jerkypro";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"juju-energy.md": {
	id: "juju-energy.md";
  slug: "juju-energy";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"kinguin.md": {
	id: "kinguin.md";
  slug: "kinguin";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"klutch1.md": {
	id: "klutch1.md";
  slug: "klutch1";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"kontrolfreek.md": {
	id: "kontrolfreek.md";
  slug: "kontrolfreek";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"legis-music.md": {
	id: "legis-music.md";
  slug: "legis-music";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"lfgdating.md": {
	id: "lfgdating.md";
  slug: "lfgdating";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"logitech.md": {
	id: "logitech.md";
  slug: "logitech";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"loupedeck.md": {
	id: "loupedeck.md";
  slug: "loupedeck";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"low-ms.md": {
	id: "low-ms.md";
  slug: "low-ms";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"maingear.md": {
	id: "maingear.md";
  slug: "maingear";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"matrix-keyboards.md": {
	id: "matrix-keyboards.md";
  slug: "matrix-keyboards";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"mavix.md": {
	id: "mavix.md";
  slug: "mavix";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"maxnomic.md": {
	id: "maxnomic.md";
  slug: "maxnomic";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"meta-pcs.md": {
	id: "meta-pcs.md";
  slug: "meta-pcs";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"mixt-energy.md": {
	id: "mixt-energy.md";
  slug: "mixt-energy";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"mojodesk.md": {
	id: "mojodesk.md";
  slug: "mojodesk";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"msi-gaming.md": {
	id: "msi-gaming.md";
  slug: "msi-gaming";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"nanoleaf.md": {
	id: "nanoleaf.md";
  slug: "nanoleaf";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"nerd-or-die.md": {
	id: "nerd-or-die.md";
  slug: "nerd-or-die";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"nerdvana.md": {
	id: "nerdvana.md";
  slug: "nerdvana";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"netgear.md": {
	id: "netgear.md";
  slug: "netgear";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"newegg.md": {
	id: "newegg.md";
  slug: "newegg";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"nexus-gg.md": {
	id: "nexus-gg.md";
  slug: "nexus-gg";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"nitrado-hosting.md": {
	id: "nitrado-hosting.md";
  slug: "nitrado-hosting";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"noble-chairs.md": {
	id: "noble-chairs.md";
  slug: "noble-chairs";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"nord-vpn.md": {
	id: "nord-vpn.md";
  slug: "nord-vpn";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"notion.md": {
	id: "notion.md";
  slug: "notion";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"nvidia.md": {
	id: "nvidia.md";
  slug: "nvidia";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"nzxt.md": {
	id: "nzxt.md";
  slug: "nzxt";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"obsbot.md": {
	id: "obsbot.md";
  slug: "obsbot";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"onfire-gaming.md": {
	id: "onfire-gaming.md";
  slug: "onfire-gaming";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"origin-pc.md": {
	id: "origin-pc.md";
  slug: "origin-pc";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"own3d.md": {
	id: "own3d.md";
  slug: "own3d";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"peepo-paradise.md": {
	id: "peepo-paradise.md";
  slug: "peepo-paradise";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"placeit.md": {
	id: "placeit.md";
  slug: "placeit";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"playbudz.md": {
	id: "playbudz.md";
  slug: "playbudz";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"player-one-coffee.md": {
	id: "player-one-coffee.md";
  slug: "player-one-coffee";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"powera.md": {
	id: "powera.md";
  slug: "powera";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"premiumbeat.md": {
	id: "premiumbeat.md";
  slug: "premiumbeat";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"pretzel-rocks.md": {
	id: "pretzel-rocks.md";
  slug: "pretzel-rocks";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"racgting.md": {
	id: "racgting.md";
  slug: "racgting";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"raze-energy.md": {
	id: "raze-energy.md";
  slug: "raze-energy";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"razer.md": {
	id: "razer.md";
  slug: "razer";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"respawn.md": {
	id: "respawn.md";
  slug: "respawn";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"restream.md": {
	id: "restream.md";
  slug: "restream";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"roccat.md": {
	id: "roccat.md";
  slug: "roccat";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"rogue-energy.md": {
	id: "rogue-energy.md";
  slug: "rogue-energy";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"scan.md": {
	id: "scan.md";
  slug: "scan";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"secretlab.md": {
	id: "secretlab.md";
  slug: "secretlab";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"serverblend.md": {
	id: "serverblend.md";
  slug: "serverblend";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"sizzle-popcorn.md": {
	id: "sizzle-popcorn.md";
  slug: "sizzle-popcorn";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"starforge-systems.md": {
	id: "starforge-systems.md";
  slug: "starforge-systems";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"steelseries.md": {
	id: "steelseries.md";
  slug: "steelseries";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"stince-built.md": {
	id: "stince-built.md";
  slug: "stince-built";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"streamelements.md": {
	id: "streamelements.md";
  slug: "streamelements";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"streamerzone.md": {
	id: "streamerzone.md";
  slug: "streamerzone";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"streamlabs.md": {
	id: "streamlabs.md";
  slug: "streamlabs";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"supe-energy.md": {
	id: "supe-energy.md";
  slug: "supe-energy";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"surfshark.md": {
	id: "surfshark.md";
  slug: "surfshark";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"swift-grips.md": {
	id: "swift-grips.md";
  slug: "swift-grips";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"swift-lifestyles.md": {
	id: "swift-lifestyles.md";
  slug: "swift-lifestyles";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"technisport.md": {
	id: "technisport.md";
  slug: "technisport";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"tunnelbear.md": {
	id: "tunnelbear.md";
  slug: "tunnelbear";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"turtle-beach.md": {
	id: "turtle-beach.md";
  slug: "turtle-beach";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"venom-gaming.md": {
	id: "venom-gaming.md";
  slug: "venom-gaming";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"vertagear.md": {
	id: "vertagear.md";
  slug: "vertagear";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"vidiq.md": {
	id: "vidiq.md";
  slug: "vidiq";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"viper-gaming.md": {
	id: "viper-gaming.md";
  slug: "viper-gaming";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"visuals-by-impulse.md": {
	id: "visuals-by-impulse.md";
  slug: "visuals-by-impulse";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"viter-energy-mints.md": {
	id: "viter-energy-mints.md";
  slug: "viter-energy-mints";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"webaround.md": {
	id: "webaround.md";
  slug: "webaround";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"wraith-energy.md": {
	id: "wraith-energy.md";
  slug: "wraith-energy";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"xidax.md": {
	id: "xidax.md";
  slug: "xidax";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
"xsplit.md": {
	id: "xsplit.md";
  slug: "xsplit";
  body: string;
  collection: "sponsorships";
  data: any
} & { render(): Render[".md"] };
};
"streaming-tools": {
"discord.md": {
	id: "discord.md";
  slug: "discord";
  body: string;
  collection: "streaming-tools";
  data: any
} & { render(): Render[".md"] };
"open-broadcast-software.md": {
	id: "open-broadcast-software.md";
  slug: "open-broadcast-software";
  body: string;
  collection: "streaming-tools";
  data: any
} & { render(): Render[".md"] };
"own3d.md": {
	id: "own3d.md";
  slug: "own3d";
  body: string;
  collection: "streaming-tools";
  data: any
} & { render(): Render[".md"] };
"pretzel.md": {
	id: "pretzel.md";
  slug: "pretzel";
  body: string;
  collection: "streaming-tools";
  data: any
} & { render(): Render[".md"] };
"starforge-systems.md": {
	id: "starforge-systems.md";
  slug: "starforge-systems";
  body: string;
  collection: "streaming-tools";
  data: any
} & { render(): Render[".md"] };
"streams-charts.md": {
	id: "streams-charts.md";
  slug: "streams-charts";
  body: string;
  collection: "streaming-tools";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
