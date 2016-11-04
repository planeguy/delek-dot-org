import '../brutal-image/brutal-image.tag!';
import RColor from 'src/vendor/rcolor-esm';
<clusterfriend-item class="clusterfriend-item">
    <article>
        <div class="title" if="{opts.item.title}">{opts.item.title}</div>
        <div class="desc" if="{opts.item.description}">{opts.item.description}</div>
        <div if="{picture}">
            <brutal-image imagesrc="{picture}" backgroundcolor="{imagecolor}"></brutal-image>
        </div>
        <div><small class="date">{opts.item.published}</small> <small><a class="permalink" href="{opts.base+'#'+opts.item.guid}">permalink</a></small></div>
    </article>
    <script>
        this.imagecolor = (new RColor()).get(true);
        if(this.opts.item && this.opts.item.enclosure && this.opts.item.enclosure.type && this.opts.item.enclosure.type.indexOf('image')===0) this.picture = this.opts.item.enclosure.url;
    </script>
</clusterfriend-item>