(function() {
    var type_impls = Object.fromEntries([["spin_trigger",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FactorsInstanceBuilder%3C'_,+T,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin_factors_executor/lib.rs.html#203\">Source</a><a href=\"#impl-FactorsInstanceBuilder%3C'_,+T,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"struct\" href=\"spin_factors_executor/struct.FactorsInstanceBuilder.html\" title=\"struct spin_factors_executor::FactorsInstanceBuilder\">FactorsInstanceBuilder</a>&lt;'_, T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"spin_factors/runtime_factors/trait.RuntimeFactors.html\" title=\"trait spin_factors::runtime_factors::RuntimeFactors\">RuntimeFactors</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.app_component\" class=\"method\"><a class=\"src rightside\" href=\"src/spin_factors_executor/lib.rs.html#205\">Source</a><h4 class=\"code-header\">pub fn <a href=\"spin_factors_executor/struct.FactorsInstanceBuilder.html#tymethod.app_component\" class=\"fn\">app_component</a>(&amp;self) -&gt; &amp;AppComponent&lt;'_&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the app component for the instance.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.store_builder\" class=\"method\"><a class=\"src rightside\" href=\"src/spin_factors_executor/lib.rs.html#210\">Source</a><h4 class=\"code-header\">pub fn <a href=\"spin_factors_executor/struct.FactorsInstanceBuilder.html#tymethod.store_builder\" class=\"fn\">store_builder</a>(&amp;mut self) -&gt; &amp;mut StoreBuilder</h4></section></summary><div class=\"docblock\"><p>Returns the store builder for the instance.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.factor_builders\" class=\"method\"><a class=\"src rightside\" href=\"src/spin_factors_executor/lib.rs.html#215\">Source</a><h4 class=\"code-header\">pub fn <a href=\"spin_factors_executor/struct.FactorsInstanceBuilder.html#tymethod.factor_builders\" class=\"fn\">factor_builders</a>(\n    &amp;mut self,\n) -&gt; &amp;mut &lt;T as <a class=\"trait\" href=\"spin_factors/runtime_factors/trait.RuntimeFactors.html\" title=\"trait spin_factors::runtime_factors::RuntimeFactors\">RuntimeFactors</a>&gt;::<a class=\"associatedtype\" href=\"spin_factors/runtime_factors/trait.RuntimeFactors.html#associatedtype.InstanceBuilders\" title=\"type spin_factors::runtime_factors::RuntimeFactors::InstanceBuilders\">InstanceBuilders</a></h4></section></summary><div class=\"docblock\"><p>Returns the factor instance builders for the instance.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.factor_builder\" class=\"method\"><a class=\"src rightside\" href=\"src/spin_factors_executor/lib.rs.html#220\">Source</a><h4 class=\"code-header\">pub fn <a href=\"spin_factors_executor/struct.FactorsInstanceBuilder.html#tymethod.factor_builder\" class=\"fn\">factor_builder</a>&lt;F&gt;(\n    &amp;mut self,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;mut &lt;F as <a class=\"trait\" href=\"spin_factors/factor/trait.Factor.html\" title=\"trait spin_factors::factor::Factor\">Factor</a>&gt;::<a class=\"associatedtype\" href=\"spin_factors/factor/trait.Factor.html#associatedtype.InstanceBuilder\" title=\"type spin_factors::factor::Factor::InstanceBuilder\">InstanceBuilder</a>&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"spin_factors/factor/trait.Factor.html\" title=\"trait spin_factors::factor::Factor\">Factor</a>,</div></h4></section></summary><div class=\"docblock\"><p>Returns the specific instance builder for the given factor.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.wasmtime_engine\" class=\"method\"><a class=\"src rightside\" href=\"src/spin_factors_executor/lib.rs.html#225\">Source</a><h4 class=\"code-header\">pub fn <a href=\"spin_factors_executor/struct.FactorsInstanceBuilder.html#tymethod.wasmtime_engine\" class=\"fn\">wasmtime_engine</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"https://docs.rs/wasmtime/29.0.1/wasmtime/engine/struct.Engine.html\" title=\"struct wasmtime::engine::Engine\">Engine</a></h4></section></summary><div class=\"docblock\"><p>Returns the underlying wasmtime engine for the instance.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.component\" class=\"method\"><a class=\"src rightside\" href=\"src/spin_factors_executor/lib.rs.html#230\">Source</a><h4 class=\"code-header\">pub fn <a href=\"spin_factors_executor/struct.FactorsInstanceBuilder.html#tymethod.component\" class=\"fn\">component</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"https://docs.rs/wasmtime/29.0.1/wasmtime/runtime/component/component/struct.Component.html\" title=\"struct wasmtime::runtime::component::component::Component\">Component</a></h4></section></summary><div class=\"docblock\"><p>Returns the compiled component for the instance.</p>\n</div></details></div></details>",0,"spin_trigger::TriggerInstanceBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FactorsInstanceBuilder%3C'_,+T,+U%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/spin_factors_executor/lib.rs.html#235\">Source</a><a href=\"#impl-FactorsInstanceBuilder%3C'_,+T,+U%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, U&gt; <a class=\"struct\" href=\"spin_factors_executor/struct.FactorsInstanceBuilder.html\" title=\"struct spin_factors_executor::FactorsInstanceBuilder\">FactorsInstanceBuilder</a>&lt;'_, T, U&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"spin_factors/runtime_factors/trait.RuntimeFactors.html\" title=\"trait spin_factors::runtime_factors::RuntimeFactors\">RuntimeFactors</a>,\n    U: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.instantiate\" class=\"method\"><a class=\"src rightside\" href=\"src/spin_factors_executor/lib.rs.html#237-243\">Source</a><h4 class=\"code-header\">pub async fn <a href=\"spin_factors_executor/struct.FactorsInstanceBuilder.html#tymethod.instantiate\" class=\"fn\">instantiate</a>(\n    self,\n    executor_instance_state: U,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;(<a class=\"struct\" href=\"https://docs.rs/wasmtime/29.0.1/wasmtime/runtime/component/instance/struct.Instance.html\" title=\"struct wasmtime::runtime::component::instance::Instance\">Instance</a>, Store&lt;<a class=\"struct\" href=\"spin_factors_executor/struct.InstanceState.html\" title=\"struct spin_factors_executor::InstanceState\">InstanceState</a>&lt;&lt;T as <a class=\"trait\" href=\"spin_factors/runtime_factors/trait.RuntimeFactors.html\" title=\"trait spin_factors::runtime_factors::RuntimeFactors\">RuntimeFactors</a>&gt;::<a class=\"associatedtype\" href=\"spin_factors/runtime_factors/trait.RuntimeFactors.html#associatedtype.InstanceState\" title=\"type spin_factors::runtime_factors::RuntimeFactors::InstanceState\">InstanceState</a>, U&gt;&gt;), <a class=\"struct\" href=\"https://docs.rs/anyhow/1.0.93/anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Instantiates the instance with the given executor instance state</p>\n</div></details></div></details>",0,"spin_trigger::TriggerInstanceBuilder"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[7903]}