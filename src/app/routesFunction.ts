import { Itemize } from "./models/itemize";
import { CoreComponent } from "./shell/core/core.component";
import { ResolverApi } from "./shell/core/resolverApi";
import { environment } from "../environments/environment";
import { FormShellComponent } from "./shell/form-shell/form-shell.component";
import { FormResolver } from "./shell/form-shell/form.resolver";

export function routesCalculator(elements: RouteInfo[]) {
    var obj = []
    elements.forEach(val => {
        obj.push({
            path: val.endpoint,
            component: CoreComponent,
            resolve: {
                items: ResolverApi
            },
            data: {
                api: environment.api + val.endpoint,
                endpoint: val.endpoint,
                listType: val.listType,
                class: val.class,
                idName: val.idName
            },
            children: [
                {
                  path: ":id",
                  component: FormShellComponent,
                  resolve: {
                    model: FormResolver
                  },
                  data: {
                    class: val.class,
                    api: environment.api + val.endpoint,   
                  }
                },
                {
                  path: "",
                  component: FormShellComponent,
                  data: {
                    model: new val.class(),
                    class: val.class,
                    api: environment.api + val.endpoint
                  }
                }
              ]
        })
    })
    return obj;
}

declare interface RouteInfo {
    endpoint: String,
    listType: String,
    class: any,
    idName: String
}