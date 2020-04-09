import { modulesMapper } from './modules.mappers'
import { DynamicModule } from '@nestjs/common/interfaces'

/**
 * Receives a list of module names to be used in the application
 * and tries to match each module name to be a correspondence set in modulesMapper.
 */
export const mapModules = (providedModules: Array<string>): Array<DynamicModule> => {
  if (!Array.isArray(providedModules) || !providedModules.length)
  {
    throw new Error("No modules provided. Please provide a list of modules during the application boostrap")
  }

  const { keys, values } = Object

  let applicationModules = []
  keys(modulesMapper)
    .forEach((moduleName, index) => {
      const match = providedModules.findIndex(providedModule => providedModule === moduleName)

      if (match !== -1)
      {
        applicationModules.push(values(modulesMapper)[index])
      }
    })

  return applicationModules;
}
