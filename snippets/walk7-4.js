onNodeEdit: function(editor, context, eOpts) {

    var rec = context.record;

    rec.parentNode.sort(function(n1, n2) {
        n1 = n1.get('text');
        n2 = n2.get('text');
        if (n1 < n2) {
            return -1;
        } else if (n1 === n2) {
            return 0;
        }
        return 1;
    });

}