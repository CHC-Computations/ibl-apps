from django.shortcuts import render
from django.db.models.functions import Length

from .utils.tree import TreeNode, look_for_parent

from .models import Heading


def headings_view(request):
    headings = Heading.objects.all()
    headings_trees = []
    for heading in headings:
        if not heading.parent:
            headings_trees.append(TreeNode(heading))
        else:
            new_node = TreeNode(heading)
            parent_start_idx = int(new_node.data.parent.split('.')[0])
            tree = headings_trees[parent_start_idx-1]
            look_for_parent(tree, new_node)
    return render(request, 'headings/headings.html', {'headings_trees': headings_trees})
