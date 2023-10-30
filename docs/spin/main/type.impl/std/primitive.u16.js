(function() {var type_impls = {
"spin_sdk":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3C%26Value%3E-for-u16\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin_sdk/sqlite.rs.html#70\">source</a><a href=\"#impl-TryFrom%3C%26Value%3E-for-u16\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'a <a class=\"enum\" href=\"spin_sdk/sqlite/enum.Value.html\" title=\"enum spin_sdk::sqlite::Value\">Value</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a></h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spin_sdk/sqlite.rs.html#70\">source</a><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(value: &amp;'a <a class=\"enum\" href=\"spin_sdk/sqlite/enum.Value.html\" title=\"enum spin_sdk::sqlite::Value\">Value</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, Self::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html#associatedtype.Error\" title=\"type core::convert::TryFrom::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Performs the conversion.</div></details></div></details>","TryFrom<&'a Value>","spin_sdk::wit::wasi::http::types::StatusCode"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IntoStatusCode-for-u16\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin_sdk/http/conversions.rs.html#284-288\">source</a><a href=\"#impl-IntoStatusCode-for-u16\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"spin_sdk/http/conversions/trait.IntoStatusCode.html\" title=\"trait spin_sdk::http::conversions::IntoStatusCode\">IntoStatusCode</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_status_code\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spin_sdk/http/conversions.rs.html#285-287\">source</a><a href=\"#method.into_status_code\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"spin_sdk/http/conversions/trait.IntoStatusCode.html#tymethod.into_status_code\" class=\"fn\">into_status_code</a>(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a></h4></section></summary><div class='docblock'>Turn <code>self</code> into a status code</div></details></div></details>","IntoStatusCode","spin_sdk::wit::wasi::http::types::StatusCode"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decode-for-u16\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin_sdk/mysql.rs.html#113-120\">source</a><a href=\"#impl-Decode-for-u16\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"spin_sdk/mysql/trait.Decode.html\" title=\"trait spin_sdk::mysql::Decode\">Decode</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/spin_sdk/mysql.rs.html#114-119\">source</a><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"spin_sdk/mysql/trait.Decode.html#tymethod.decode\" class=\"fn\">decode</a>(value: &amp;<a class=\"enum\" href=\"spin_sdk/mysql/enum.DbValue.html\" title=\"enum spin_sdk::mysql::DbValue\">DbValue</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"enum\" href=\"spin_sdk/mysql/enum.Error.html\" title=\"enum spin_sdk::mysql::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Decode a new value of this type using a <a href=\"spin_sdk/mysql/enum.DbValue.html\" title=\"enum spin_sdk::mysql::DbValue\"><code>DbValue</code></a>.</div></details></div></details>","Decode","spin_sdk::wit::wasi::http::types::StatusCode"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()