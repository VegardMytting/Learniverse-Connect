-- Create tables for the courses
CREATE TABLE Courses (
    ProductID INTEGER PRIMARY KEY,
    Title TEXT NOT NULL,
    CoveredTopics TEXT NOT NULL,
    Level TEXT NOT NULL,
    ClosestSession TEXT NOT NULL,
    CourseSize REAL NOT NULL,
    HoursPerWeek REAL NOT NULL,
    RelatedCertifications TEXT,
    CourseProviders TEXT NOT NULL,
    Description TEXT NOT NULL
);

-- Course Providers table
CREATE TABLE CourseProviders (
    ProviderID INTEGER PRIMARY KEY,
    ProviderName TEXT NOT NULL,
    CourseID INTEGER NOT NULL,
    Price REAL NOT NULL,
    FOREIGN KEY (CourseID) REFERENCES Courses(ProductID)
);