class TreeNode:

    def __init__(self, data, parent=None):
        self.data = data
        self.parent = parent
        self.children = []
        
    def __str__(self):
        return f'{self.data.id} {self.data.name}'
    
    def add_parent(self, parent):
        self.parent = parent
        parent.children.append(self)
    
    def add_child(self, child):
        self.children.append(child)
        child.parent = self


def look_for_parent(start_node, new_node):
    stack=[start_node]
    while True:
        if len(stack)==0:
            return False
        existing_node=stack.pop()
        if existing_node.data.id==new_node.data.parent:
            existing_node.add_child(new_node)
            return True
        children = existing_node.children
        stack.extend(children)
    
    
    

