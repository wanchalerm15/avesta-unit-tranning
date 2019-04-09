CREATE TABLE [dbo].[Member] (
    [Id]        INT           IDENTITY (1, 1) NOT NULL,
    [Firstname] NVARCHAR (50) NOT NULL,
    [Lastname]  NVARCHAR (50) NOT NULL,
    [Old]       INT           NOT NULL,
    [Created]   DATETIME      DEFAULT (getdate()) NOT NULL,
    [Updated]   DATETIME      DEFAULT (getdate()) NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);