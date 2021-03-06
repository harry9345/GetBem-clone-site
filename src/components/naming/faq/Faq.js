import React from "react";
import Navbar from "../../layouts/Navbar";

import Footer from "../../layouts/Footer";

const Faq = () => {
  return (
    <>
      <div className="header">
        <Navbar active="faq" />
      </div>
      <div className="container faq">
        <h1>FAQ</h1>
        <p>
          These Frequently Asked Question are real questions of developers
          started with BEM, answered by the GetBEM community. Feel free to{" "}
          <a href="https://github.com/getbem/getbem.com/issues/new?title=FAQ:%20Type%20your%20question%20here">
            ask your question
          </a>{" "}
          too, and we will answer it as well.
        </p>
        <div>
          <ul>
            <li>
              <a href="#why-bem">
                Why should I choose BEM and not another CSS modular solution?
              </a>
            </li>
            <li>
              <a href="#why-the-modifier-classes-are-prefixed">
                Why are the modifier CSS classes not represented as a combined
                selector?
              </a>
            </li>
            <li>
              <a href="#custom-tags-for-blocks">
                Why do I need CSS classes for block instead of using semantic
                custom tags?
              </a>
            </li>
            <li>
              <a href="#block-modifier-mix">
                Why do I need to combine block and prefixed modifier class for a
                modified block?
              </a>
            </li>
            <li>
              <a href="#block-modifier-affects-elements">
                Can a block modifier affect elements?
              </a>
            </li>
            <li>
              <a href="#can-i-create-global-modifier">
                Can I create a global modifier applicable to any block?
              </a>
            </li>
            <li>
              <a href="#encapsulating-tag-selector">
                Can I combine a tag and a class in selector like button.button?
              </a>
            </li>
            <li>
              <a href="#css-modifier-names">
                Is this good to name modifiers corresponding to what they have
                in CSS? Like <code>.block__element--border-bottom-5px</code>.
              </a>
            </li>
            <li>
              <a href="#css-nested-elements">
                What would be a class name for an element inside another
                element? <code>.block__el1__el2</code>?
              </a>
            </li>
            <li>
              <a href="#global-css-resets">
                I've heard that BEM does not recommend global CSS resets? Why?
              </a>
            </li>
            <li>
              <a href="#ask-your-question">Did not find the answer?</a>
            </li>
          </ul>
          <p>
            <a href="http://getbem.com/" id="why-bem">
              d
            </a>
          </p>
          <h2 id="why-should-i-choose-bem-as-a-modular-solution-for-css-">
            Why should I choose BEM as a modular solution for CSS?
          </h2>
          <blockquote>
            <p>
              There are some other modular solutions for CSS (such as OOCSS,
              AMCSS, SMACSS, SUITCSS). What are the reasons to choose BEM?
            </p>
          </blockquote>
          <p>
            BEM provides solutions for all the frontend technologies: CSS,
            JavaScript, templating; and also for building process of your web
            application. The methodology is applicable anywhere. However, to
            apply this in JavaScript and templating you would need special
            frameworks whereas in CSS you may just follow the methodological
            recommendations. The CSS part of BEM is the easiest to take into
            your development process. This is why many use only it. On the other
            hand, if lately you would found your project fully BEMed (in CSS)
            and yourself happy for its grown maintenance, you probably would
            take next step in modularizing your web application. BEM CSS will be
            easier to coordinate with modular JavaScript and blocks-based
            project file structure.
          </p>
          <p>
            If speaking about CSS modular solutions only, the key feature of BEM
            is block's independence. Following the CSS recommendations enables
            to put a block into any place on a page and be sure that is won't be
            affected by its surroundings. Also, if you would lately need to nest
            another block into the current one, their full compatibility is
            guaranteed. In other words, when maintaining your web application
            you would be able to move blocks across the page, add others and
            combine them.
          </p>
          <p>
            BEM CSS unambiguously defines which CSS belongs to a piece of
            interface and so using it gives answers to questions "Can I remove
            this piece of code?" and "What happens and which interface parts
            will be affected if I change this piece of code?".
          </p>
          <p>
            <a
              href="http://getbem.com/"
              id="why-the-modifier-classes-are-prefixed"
            >
              b
            </a>
          </p>
          <h2 id="why-the-modifier-css-classes-are-not-represented-as-a-combined-selector-">
            Why the modifier CSS classes are not represented as a combined
            selector?
          </h2>
          <blockquote>
            <p>
              BEM recommends to modify blocks like this{" "}
              <code>&lt;div className="block block--mod"&gt;</code>. Why not to
              use the simple version like{" "}
              <code>&lt;div className="block mod"&gt;</code>? Since we now have
              combined selectors <code>.block.mod</code>, it's easy to define
              all the CSS properties to it.
            </p>
          </blockquote>
          <p>
            The recommendation to prefix modifier CSS class with its block name
            has multiple reasons.
          </p>
          <p>
            Firstly, since it is possible to mix several blocks and elements at
            the same DOM node, we need to ensure that a modifier would affect
            only the block it belongs to. Let's say that we have a menu item
            element and a button mixed together. In HTML this construction is
            represented by the following markup:
          </p>
          <pre>
            <code className="lang-html">
              &lt;div className="menu__item button"&gt;&lt;/div&gt;
            </code>
          </pre>
          <p>
            In this case adding <code>.active</code> modifier to them would
            affect both.
          </p>
          <pre>
            <code className="lang-html">
              {`&lt;div className="menu__item button active"&gt;&lt;/div&gt;`}
            </code>
          </pre>
          <p>
            All the 3 sit at the same DOM node, so it is impossible to
            differentiate if we mean <code>menu__item.active</code> or{" "}
            <code>button.active</code>. Whereas in the prefixed case the naming{" "}
            <code>button--active</code> unambiguously says as that this is only
            the button that has to be affected.
          </p>
          <p>
            Another point is CSS specificity. The combined selectors are more
            specific (means more important) than single class selectors. This
            means that you might have trouble when redefining them with parent
            block code.
          </p>
          <pre>
            <code className="lang-html">
              {`&lt;div className="header"&gt;
    &lt;button className="button active"&gt;
&lt;/div&gt;`}
            </code>
          </pre>
          <p>
            If you already have <code>.button.active</code> selector in your
            code, the specificity of your redefining{" "}
            <code>.header .button</code> would be exactly the same as the
            specificity of modifier combined selector which makes you dependent
            on the order of the CSS rules declared. Whereas if you use a
            prefixed modifier, you can always be sure that the cascade selector{" "}
            <code>.header .button</code> will overwrite the{" "}
            <code>.button--active</code> modifier.
          </p>
          <p>This makes life easier especially for maintainable projects.</p>
          <p>
            The third point is that looking at the{" "}
            <code>&lt;div className="block block--mod"&gt;</code> markup you can
            clearly see the block structure. It is easy to recognize that we
            have a block and its modifier and there is no different
            interpretations here. Unfortunately a grasp onto{" "}
            <code>&lt;div className="block mod"&gt;</code> code does not give
            such information. Depending on what are the exact CSS classes
            sometimes it is impossible to recognize if we have a block and a
            modifier or a mix of 2 blocks here. This might be even more
            confusing if the names of the entities are complex or
            contracted/abbreviated (which sometimes happens in big projects).
            <br /> Clear understanding of a block structure is especially
            helpful when looking for corresponding code on a file system.
          </p>
          <p>
            You will also appreciate <code>.block--mod</code> practice when
            refactoring and use global search over all your project files.
            Imagine the same looking for not-prefixed <code>.mod</code> and all
            the HTML pieces it might be in.
          </p>
          <p>
            And lastly, from a development process standpoint the difference
            between <code>.block.mod</code> and <code>.block--mod</code> is only
            one symbol. Using <code>-</code> instead of <code>.</code> costs
            nothing but it brings all the benefits listed above. Moreover, since
            pre-processor began to support BEM notation, it is pretty natural to
            write <code>&amp;--mod</code> there and finally get a modifier
            declared as it was recommended.
          </p>
          <p>
            <a href="http://getbem.com/" id="custom-tags-for-blocks">
              v
            </a>
          </p>
          <h2 id="why-do-i-need-css-classes-for-block-instead-of-using-semantic-custom-tags-">
            Why do I need CSS classes for block instead of using semantic custom
            tags?
          </h2>
          <blockquote>
            <p>
              Blocks can be represented as custom tags which we may define CSS
              rules for. Looks like we do not need CSS classes for blocks at
              all. They can be used for modifiers only, like{" "}
              <code>&lt;button className="mod"/&gt;</code>.
            </p>
          </blockquote>
          <p>
            Using custom tags as block selectors is indeed one of the BEMish
            solutions and can be used. However this variant is less flexible
            than the recommended "class" approach.
          </p>
          <p>
            This is more likely that you would need to prefix modifier classes
            with their block name to provide them namespace. The details are
            uncovered in{" "}
            <a href="#why-the-modifier-classes-are-prefixed">
              "Why the modifier CSS classes are prefixed with their parent block
              name?"
            </a>{" "}
            question. So, finally the custom-tag version of a block is like{" "}
            <code>&lt;block className="block--mod"/&gt;</code>. This does not
            look very different from{" "}
            <code>&lt;div className="block block--mod"&gt;</code> especially
            assuming that being tag-independent you can use any custom node and
            stay with{" "}
            <code>{`&lt;block className="block block--mod"&gt;`}</code>.
          </p>
          <p>
            Second drawback is that "tag" version makes using the mixes of
            blocks impossible whereas the "class" version represent that
            naturally by <code>&lt;div className="block1 block2"&gt;</code>.
          </p>
          <p>
            And the last clench against such an approach is that in many cases
            you are not able to represent your blocks with custom tags at all.
            For a <code>link</code> block you definitely need{" "}
            <code>&lt;a&gt;</code> tag, and the same for{" "}
            <code>&lt;input&gt;</code>.
          </p>
          <p>
            <a href="http://getbem.com/" id="block-modifier-mix">
              f
            </a>
          </p>
          <h2 id="why-do-i-need-to-combine-block-and-prefixed-modifier-class-for-a-modified-block-">
            Why do I need to combine block and prefixed modifier class for a
            modified block?
          </h2>
          <blockquote>
            <p>
              Why does both block's and modifier's class sit together in the
              modified block like{" "}
              <code>&lt;div className=???block block--mod???&gt;</code>?
            </p>
            <p>
              Everything about a modified block can be described in{" "}
              <code>.block--mod</code>. If there is something common between 2
              modifiers, it's possible to use preprocessor's mixins to avoid
              copy-paste.
            </p>
          </blockquote>
          <p>
            This approach is possible thanks to preprocessors. However it brings
            some drawbacks which you should be aware of.
          </p>
          <p>
            In the case of combining 2 or more modifiers at the same block{" "}
            <code>
              &lt;div className="block--theme--christmas block--size--big"&gt;
            </code>
            , you would get the core block's styles twice. However this depends
            on the preprocessor algorithms.
          </p>
          <p>
            When adding/removing modifiers dynamically with JavaScript, the
            additional modifier is more handy. Switching it off would mean only
            removing one CSS class from the DOM node with no need to add the
            core block CSS class back as it sits there forever.
          </p>
          <p>
            <a href="http://getbem.com/" id="block-modifier-affects-elements">
              f
            </a>
          </p>
          <h2 id="can-a-block-modifier-affect-elements-">
            Can a block modifier affect elements?
          </h2>
          <blockquote>
            <p>
              If I have a block modifier, for example <code>xmas</code>, and I
              want the elements within that block to also be xmas themed, how
              would it be best to do it.
            </p>
            <p>
              Does a <code>--xmas</code> suffix for every element seem
              necessary? Or would this be the one use-case for nesting (e.g.{" "}
              <code></code>?)
            </p>
          </blockquote>
          <p>
            While in general BEM recommends avoiding nested selectors, in this
            case they are reasonable.
          </p>
          <p>
            When creating the nested selector, you declare that one entity
            depends on another. Because BEM introduces independent components,
            such an approach is not suggested when we are speaking about 2
            different blocks.
          </p>
          <p>
            But when it comes to a block and its element, they are not of
            equivalent meaning. By definition, an element does not make any
            sense outside its parent block. So, an element is a block-dependent
            entity. Assuming this, it is quite normal and logical that an
            element is affected by the block's current state.
          </p>
          <p>So, this is a common pattern in BEM to code</p>
          <pre>
            <code>
              {`.my-block--xmas .my-block__button {
    /* Jingle bells, jingle bells, jingle all the way.*/
}`}
            </code>
          </pre>
          <p>
            <a href="http://getbem.com/" id="can-i-create-global-modifier">
              f
            </a>
          </p>
          <h2 id="can-i-create-a-global-modifier-applicable-to-any-block-">
            Can I create a global modifier applicable to any block?
          </h2>
          <blockquote>
            <p>
              I've heard that global modifiers like <code>visible</code>,{" "}
              <code>invisible</code>, <code>red</code>, <code>opacity50</code>{" "}
              are not welcomed in BEM. Why?
            </p>
            <p>
              I think it is useful to incorporate common properties like this in
              such a global class and then apply it to different blocks.
            </p>
          </blockquote>
          <p>
            Indeed you can have 2 main CSS classes at the same DOM node. In BEM
            we call it <code>mix</code>:
          </p>
          <pre>
            <code className="lang-html">
              {`&lt;div className="block1 block2"&gt;&lt;/div&gt;`}
            </code>
          </pre>
          <p>
            But the important thing about it is that both <code>block1</code>{" "}
            and <code>block2</code> should be standalone blocks. This is
            slightly different from what people usually mean by "global
            modifiers", as modifiers do not have any sense on their own and are
            just a set of properties to change.
          </p>
          <pre>
            <code className="lang-html">
              {`&lt;div className="block globalmod"&gt;&lt;/div&gt;`}
            </code>
          </pre>
          <p>
            If you think that in your case you would have a global modifier,
            these are the problems you may face:
          </p>
          <p>
            First of all the specificity problem appears. In a local modifier
            case CSS code goes like this:
          </p>
          <pre>
            <code className="lang-css">
              {`.block {
  display: block;
}
.block--hidden {
  display: none;
}`}
            </code>
          </pre>
          <p>
            Both block and modifier selectors have the same specificity. As
            modifier declaration goes after the block, it redefines the CSS
            properties. These styles belong to block and are stored in the block
            file. Thus, independently on how the resultant CSS is built from
            source, you will always have them in this order and be sure that
            redefining happens.
          </p>
          <p>
            In the case of global modifier, its properties can be redefined by
            the blocks if they follow modifiers in code:
          </p>
          <pre>
            <code className="lang-css">
              {`.hidden { display: none }
/* ... */
.block { display: block }`}
            </code>
          </pre>
          <pre>
            <code className="lang-html">
              {`&lt;div className="block hidden"&gt;you still see me&lt;/div&gt;`}
            </code>
          </pre>
          <p>
            One of the possible solutions to this problem is to raise the
            selector specificity of global modifiers by adding{" "}
            <code>!important</code> to them. But in this case any side-effects
            of such a global modifier might be overwritten only by declarations
            with the same <code>!important</code> instruction.
          </p>
          <p>
            Another way is to load global modifier CSS after all the other
            styles. But in this case you are not able any more to use{" "}
            <em>lazy loading</em> strategy for your components. The additional
            lazy CSS will still be loaded after the modifiers and you get the
            same problem.
          </p>
          <p>
            The next problem is combination of several global modifiers at the
            same block.
          </p>
          <pre>
            <code className="lang-html">
              {`&lt;div className="block mod1 mod2"&gt;&lt;/div&gt;`}
            </code>
          </pre>
          <p>
            In this case you absolutely have no control over the block. The
            order of modifiers in code can be different. If it conflicts with
            other declarations, changing the order can fix this conflict but
            lead to another one. The only way would be to redefine the mess in
            block. And don't forget about the <code>!important</code> to your
            hack.
          </p>
          <p>
            Also, depending on a block the same modifier can be implemented
            differently. Even the simple <code>.hidden</code> sometimes needs to
            be not <code>display: none</code> but{" "}
            <code>visibility: hidden</code> or even{" "}
            <code>position: absolute; left: -9999px</code> etc. And if you need
            to bring some changes into your block, it is much nicer not to waste
            time searching for all the places where this block can be combined
            with a global modifier. Especially assuming that such dependencies
            usually are not described anywhere.
          </p>
          <p>
            All this hell can be avoided by encapsulating a modifier in a block
            like <code>.block--mod</code>.
          </p>
          <p>
            Indeed using global modifiers makes the resultant code less. However
            if you measure the real difference in bytes it usually does not seem
            that big. Especially if you are using CSS optimizer which can
            combine selectors.
          </p>
          <p>
            <a href="http://getbem.com/" id="encapsulating-tag-selector">
              f
            </a>
          </p>
          <h2 id="can-i-combine-a-tag-and-a-class-in-selector-like-button-button-">
            Can I combine a tag and a class in selector like{" "}
            <code>button.button</code>?
          </h2>
          <blockquote>
            <p>
              I want to use selectors like <code>button.button</code> to
              encapsulate my blocks functionality within a particular tag. If
              lately someone else would use in their code{" "}
              <code>&lt;h2 className="button"&gt;</code>, such an encapsulation
              would prevent a conflict.
            </p>
          </blockquote>
          <p>
            The CSS specificity of such a selector grows.{" "}
            <code>.button--mod</code> selector will not overwrite CSS properties
            of the block, only <code>button.button--mod</code> would work. You
            will need its modifiers to be combined with the tag as well and so
            do the developers who lately would redefine your block.
          </p>
          <p>
            Lately, when a project goes larger, it's very likely that you may
            have <code>input.button</code>, <code>span.button</code> and{" "}
            <code>a.button</code> as well. And all the prefixed selectors for
            modifiers and nested elements will need 4 declarations.
          </p>
          <p>
            So, it is better not to tie your own hands with such prefixing.
            However if you still can softly-softly ensure that your blocks are
            used with proper tags if your provide your users with templates for
            every block. This is the most flexible and automatic solution.
          </p>
          <p>
            If the templating looks overhead, there is a "documentation"
            approach to inform your users which tag the block CSS class would be
            applied to, this can be done with documenting the block code. The
            shortest version could be just a comment with a tag name prefixing
            the block declaration <code>{`/*button*/.button`}</code>. Or that
            can be a larger comment with full HTML piece needed to the block to
            function.
          </p>
          <p>
            <a href="http://getbem.com/" id="css-modifier-names">
              f
            </a>
          </p>
          <h2 id="is-this-good-to-name-modifiers-corresponding-to-what-they-have-in-css-">
            Is this good to name modifiers corresponding to what they have in
            CSS?
          </h2>
          <blockquote>
            <p>
              Thanks to mixes, we can create a lot of modifiers which represent
              CSS properties and assign them to blocks. But I've heard that "it
              is bad". For example, this selector{" "}
              <code>.block__element--border-bottom-5px</code> was stamped as
              "awful". I am wondering why and how should the modifiers be named
              then?
            </p>
          </blockquote>
          <p>
            Naming the modifiers corresponding to their CSS representation is
            not recommended. Indeed it looks not very nice but there are also
            practical reasons against it. Lately then the view of your
            components is changed, you will need to fix not only CSS but also
            the selectors. So, when you border is 6px, it would require changes
            in all the templates and sometimes in JavaScript.
          </p>
          <p>
            Also, it never happens that a modifier has only one CSS property to
            define and will have it forever. Even if now it is only border that
            differentiates one state from another, this is very likely that
            lately you would need other CSS properties for the same state of
            your block. This would be messy if you define a background or
            padding in a modifier called "border". So, it is recommended to
            choose semantic names for modifiers even if they only have one
            property by now.
          </p>
          <p>
            <a href="http://getbem.com/" id="css-nested-elements">
              d
            </a>
          </p>
          <h2 id="what-would-be-a-class-name-for-an-element-inside-another-element-block__el1__el2-">
            What would be a class name for an element inside another element?{" "}
            <code>.block__el1__el2</code>?
          </h2>
          <blockquote>
            <p>
              What should I do if my block has a complex structure and its
              elements are nested? CSS classes like{" "}
              <code>block__elem1__elem2__elem3</code> look scary.
            </p>
          </blockquote>
          <p>
            According to BEM method, block structure should be flattened; you do
            not need to reflect nested DOM structure of the block. So, the class
            names for this case would be:
          </p>
          <pre>
            <code className="lang-css">
              {`.block {}
.block__elem1 {}
.block__elem2 {}
.block__elem3 {}`}
            </code>
          </pre>
          <p>Whereas the DOM representation of the block may be nested:</p>
          <pre>
            <code className="lang-html">
              {`&lt;div className='block'&gt;
    &lt;div className='block__elem1'&gt;
        &lt;div className='block__elem2'&gt;
            &lt;div className='block__elem3'&gt;&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;`}
            </code>
          </pre>
          <p>
            Besides the fact that the classes look much nicer, it makes the
            elements be dependent on the block only. So, you can easily move
            them across the block when providing changes to the interface. The
            changes of the block DOM structure would not need corresponding
            changes to the CSS code.
          </p>
          <pre>
            <code className="lang-html">
              {`&lt;div className='block'&gt;
    &lt;div className='block__elem1'&gt;
        &lt;div className='block__elem2'&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div className='block__elem3'&gt;&lt;/div&gt;
&lt;/div&gt;`}
            </code>
          </pre>
          <p>
            <a href="http://getbem.com/" id="global-css-resets">
              d
            </a>
          </p>
          <h2 id="i-ve-heard-that-bem-does-not-recommend-global-css-resets-why-">
            I've heard that BEM does not recommend global CSS resets. Why?
          </h2>
          <blockquote>
            <p>
              CSS resets is a practise making a good showing. Many frameworks
              first align anything and then apply their special styles. BEM does
              not recommend common resets. Why? And what we are supposed to do
              instead?
            </p>
          </blockquote>
          <p>
            Nothing bad would happen to your blocks if you use common reset
            (well, except of some special cases below). So, BEM does not
            prohibit to use them. But using them BEM-way would be more
            effective.
          </p>
          <p>
            Common CSS reset is a set of CSS to be applied to document nodes and
            ensure that their default view is the same in different browsers. In
            most cases the CSS rules are written for tag selectors and this is
            not recommended in BEM (you can find a lot of explanation above).
          </p>
          <p>
            Another point is that in BEM a block encapsulates everything which
            is needed for it to be displayed and function. And this is why we
            call the BEM blocks independent. If the block does not look properly
            without a third-party CSS being added onto the page, it cannot be
            called "independent" that much.
          </p>
          <p>
            Assuming this all, BEM recommends every block to reset itself. If
            you have <code>menu</code> block and <code>list</code> block both as{" "}
            <code>&lt;ul&gt;</code> in your HTML, each of them should provide
            the reset CSS usually given to <code>&lt;ul&gt;</code>. You may
            worry that having several blocks with the same reset rules will case
            repeats in the resultant code.{" "}
            <em>But this is what CSS optimizers should do for you.</em> As a
            developer you develop every block independently, as if there are no
            other blocks on the same page.
          </p>
          <p>
            In the case you don't have a CSS optimizer to combine selectors with
            the same set of rules, you may use preprocessors to prevent
            copy-paste. With every new block you can make it reset itself mixing
            the proper code. For example, with SASS this would look like:
          </p>
          <pre>
            <code className="lang-css">
              {`.menu {
    @include reset-list;
}
.menu__item {
    @include reset-list-item;
}

/* ... */

.list {
    @include reset-list;
}
.list__item {
    @include reset-list-item;
}`}
            </code>
          </pre>
          <p>
            However using this mixin-way you should realize that the only reason
            for it is not having a proper optimizer.
          </p>
          <p>
            Having resets for every block (besides being nice and BEMish) will
            also prevent problems with injecting a third-party piece of HTML/CSS
            markup which relies on browser defaults and so can be affected by
            global resets. For example, this is a known problem for webmails.
          </p>
          <p>
            <a href="http://getbem.com/" id="ask-your-question">
              vf
            </a>
          </p>
          <h2 id="did-not-find-the-answer-please-ask-your-questions-">
            Did not find the answer? Please ask your questions!
          </h2>
          <p>
            If you didn't find the proper answer, please{" "}
            <a href="https://github.com/getbem/getbem.com/issues/new?title=Type+your+question&amp;body=Explain+in+detail+your+question&amp;labels=question">
              ask your question
            </a>
            !
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Faq;
