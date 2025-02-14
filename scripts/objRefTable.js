const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Keyboard,
		C3.Plugins.Sprite,
		C3.Behaviors.scrollto,
		C3.Behaviors.Platform,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.RestartLayout
	];
};
self.C3_JsPropNameTable = [
	{Teclado: 0},
	{DesplazarHasta: 0},
	{Plataforma: 0},
	{pj: 0},
	{enemigo: 0},
	{Sólido: 0},
	{FondoEnMosaico: 0},
	{puas: 0},
	{moneda: 0}
];

self.InstanceType = {
	Teclado: class extends self.IInstance {},
	pj: class extends self.ISpriteInstance {},
	enemigo: class extends self.ISpriteInstance {},
	FondoEnMosaico: class extends self.ITiledBackgroundInstance {},
	puas: class extends self.ITiledBackgroundInstance {},
	moneda: class extends self.ISpriteInstance {}
}