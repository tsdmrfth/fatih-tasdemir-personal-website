import React, { createContext, useContext, useState, ReactNode } from 'react'
import { Project } from '../types'

interface ProjectDetailsContextType {
    selectedProject: Project | null
    selectedIndex: number
    gridCols: number
    projects: Project[]
    openProject: (project: Project, index: number, gridCols: number, projectList: Project[]) => void
    closeProject: () => void
    navigateToProject: (index: number) => void
}

const ProjectDetailsContext = createContext<ProjectDetailsContextType | undefined>(undefined)

export const ProjectDetailsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [selectedIndex, setSelectedIndex] = useState<number>(0)
    const [gridCols, setGridCols] = useState<number>(2)
    const [projects, setProjects] = useState<Project[]>([])

    const openProject = (project: Project, index: number, cols: number, projectList: Project[]) => {
        setProjects(projectList)
        setSelectedProject(project)
        setSelectedIndex(index)
        setGridCols(cols)
    }

    const closeProject = () => {
        setSelectedProject(null)
    }

    const navigateToProject = (index: number) => {
        if (index >= 0 && index < projects.length) {
            setSelectedProject(projects[index])
            setSelectedIndex(index)
        }
    }

    return (
        <ProjectDetailsContext.Provider value={{ selectedProject, selectedIndex, gridCols, projects, openProject, closeProject, navigateToProject }}>
            {children}
        </ProjectDetailsContext.Provider>
    )
}

export const useProjectDetails = () => {
    const context = useContext(ProjectDetailsContext)
    if (context === undefined) {
        throw new Error('useProjectDetails must be used within a ProjectDetailsProvider')
    }
    return context
}
