class Circle:

    pi=3.141592653589
    def __init__(self, radius = 1):
        self.radius = radius

    def area(self):
        return self.radius * self.radius * Circle.pi
    
myc = Circle(3)
print(myc.area())