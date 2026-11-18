"""Genera los simuladores autocontenidos de las actividades de Writer.

Cada simulador = core.html (núcleo común) + sXXXX.js (actividad) [+ sXXXX.css].
Uso:  python build.py            -> todos
      python build.py s0201 ...  -> solo los indicados
"""
import sys, pathlib

src = pathlib.Path(__file__).parent
docs = src.parent.parent / "docs" / "assets"
ACTS = {
    "s0101": ("up01", "s01-01-explorador-virtual.html", "Explorador virtual · S01.01"),
    "s0102": ("up01", "s01-02-writer-virtual.html", "Writer virtual · S01.02"),
    "s0103": ("up01", "s01-03-writer-virtual.html", "Writer virtual · S01.03"),
    "s0104": ("up01", "s01-04-writer-virtual.html", "Writer virtual · S01.04"),
    "s0105": ("up01", "s01-05-writer-virtual.html", "Writer virtual · S01.05"),
    "s0106": ("up01", "s01-06-writer-virtual.html", "Writer virtual · S01.06"),
    "s0201": ("up02", "s02-01-writer-virtual.html", "Writer virtual · S02.01"),
    "s0202": ("up02", "s02-02-writer-virtual.html", "Writer virtual · S02.02"),
    "s0203": ("up02", "s02-03-writer-virtual.html", "Writer virtual · S02.03"),
    "s0204": ("up02", "s02-04-writer-virtual.html", "Writer virtual · S02.04"),
    "s0205": ("up02", "s02-05-writer-virtual.html", "Writer virtual · S02.05"),
}
core = (src / "core.html").read_text(encoding="utf-8")
for k in (sys.argv[1:] or [a for a in ACTS if (src / (a + ".js")).exists()]):
    up, f, title = ACTS[k]
    js = (src / (k + ".js")).read_text(encoding="utf-8")
    cssf = src / (k + ".css")
    css = cssf.read_text(encoding="utf-8") if cssf.exists() else ""
    html = core.replace("@@TITLE@@", title).replace("@@CSS@@", css).replace("/*@@ACT@@*/", js)
    out = docs / up
    out.mkdir(parents=True, exist_ok=True)
    (out / f).write_text(html, encoding="utf-8", newline="\n")
    print("ok", up + "/" + f, len(html))
